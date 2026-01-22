import { H3Event, createError, readBody } from 'h3'

interface TelegramPayload {
  type: 'callback' | 'message'
  name: string
  phone: string
  message?: string
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig()
  const BOT_TOKEN = config.BOT_TOKEN as string | undefined
  const CHAT_IDS_RAW = config.CHAT_IDS as string | string[] | undefined

  if (!BOT_TOKEN) {
    throw createError({ statusCode: 500, statusMessage: 'BOT_TOKEN is not configured' })
  }
  if (!CHAT_IDS_RAW || (Array.isArray(CHAT_IDS_RAW) && CHAT_IDS_RAW.length === 0)) {
    throw createError({ statusCode: 500, statusMessage: 'CHAT_IDS is not configured' })
  }

  const body = await readBody<TelegramPayload>(event)
  if (!body || !body.type || !body.name || !body.phone || (body.type === 'message' && !body.message)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid payload' })
  }

  // Normalize chat ids (string or array). String may be comma-separated.
  const chatIds: string[] = Array.isArray(CHAT_IDS_RAW)
    ? CHAT_IDS_RAW.map(String).filter(Boolean)
    : String(CHAT_IDS_RAW).split(',').map(s => s.trim()).filter(Boolean)

  // Build human-readable message
  const title = body.type === 'callback' ? '📞 Новая заявка на звонок:' : '✉️ Новое сообщение:'
  const cleanPhone = body.phone.replace(/(?!^\+)\D/g, "")
  const lines = [
    title,
    `👤 Имя: ${body.name}`,
    `📱 Телефон: <a href="tel:${cleanPhone}">${body.phone}</a>`,
  ]
  if (body.type === 'message' && body.message) {
    lines.push(`📝 Сообщение: ${body.message}`)
  }
  const text = lines.join('\n')

  // Send to all chats sequentially; collect errors
  const baseUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
  const results = await Promise.allSettled(
    chatIds.map(chat_id => $fetch(baseUrl, {
      method: 'POST',
      body: { chat_id, text, parse_mode: 'HTML' },
    }))
  )

  const failures = results
    .map((r, idx) => ({ r, chat: chatIds[idx] }))
    .filter(x => x.r.status === 'rejected')

  if (failures.length) {
    throw createError({
      statusCode: 502,
      statusMessage: `Telegram API error for chats: ${failures.map(f => f.chat).join(', ')}`,
    })
  }

  return { ok: true }
})
