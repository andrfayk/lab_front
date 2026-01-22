<template>
    <form id="callback_form" @submit.prevent="onSubmit" class="w-full">
        <fieldset class="border flex flex-col gap-4 shadow border-gray-300 rounded-xl -mt-2.5 p-4 pt-3">
            <legend class="text-gray-400 text-sm font-semibold font-heading w-max">Заказать звонок</legend>
            <FormInput
                v-model="name"
                :error="errors.name"
                name="name"
                placeholder="Имя"
                type="text"
            />
            <FormInput
                v-model="phone"
                :error="errors.phone"
                name="phone"
                placeholder="Телефон"
                type="tel"
            />
            <div class="flex flex-col gap-2">
                <FormButton :disabled="submitting">Отправить</FormButton>
            </div>
        </fieldset>
    </form>
</template>

<script setup lang="ts">
import FormButton from "~/components/form/FormButton.vue";
import FormInput from "~/components/form/FormInput.vue";

const name = ref('')
const phone = ref('')
const submitting = ref(false)
const errors = reactive<{ name?: string; phone?: string }>({})
const status = reactive<{ success: boolean; error: string | null }>({ success: false, error: null })

function validate(): boolean {
    errors.name = name.value.trim() ? '' : 'Обязательное поле'
    const digits = phone.value.replace(/\D/g, '')
    // +7 / 7 / 8 + 10 digits => digits length 11 and starts with 7 or 8
    const valid = digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'))
    errors.phone = valid ? '' : 'Неверный формат телефона'
    return !errors.name && !errors.phone
}

async function onSubmit() {
    status.success = false
    status.error = null
    if (!validate()) return
    submitting.value = true
    try {
        await $fetch('/api/telegram', {
            method: 'POST',
            body: {
                type: 'callback',
                name: name.value.trim(),
                phone: phone.value,
            },
        })
        status.success = true
        name.value = ''
        phone.value = ''
        alert('Сообщение отправлено!')
    } catch (e: any) {
        status.error = e?.data?.statusMessage || 'Ошибка отправки'
        alert(status.error)
    } finally {
        submitting.value = false
    }
}

</script>

<style scoped>

</style>