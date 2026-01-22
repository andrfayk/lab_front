<template>
    <form class="w-full" @submit.prevent="onSubmit">
        <fieldset class="grid border shadow border-gray-300 rounded-xl p-4 pt-3 grid-cols-1 gap-4">
            <legend class="font-semibold font-heading text-sm w-max">Написать сообщение</legend>
            <FormInput v-model="name" :error="errors.name" name="name" type="text" placeholder="Имя"/>
            <FormInput v-model="phone" :error="errors.phone" name="phone" type="tel" placeholder="Телефон"/>
            <TextArea v-model="message" :error="errors.message" name="message" placeholder="Сообщение"/>
            <div class="flex flex-col gap-2">
                <FormButton :disabled="submitting">Отправить</FormButton>
            </div>
        </fieldset>
    </form>
    </template>

<script setup lang="ts">
import FormButton from "~/components/form/FormButton.vue";
import FormInput from "~/components/form/FormInput.vue";
import TextArea from "~/components/form/TextArea.vue";

const name = ref('')
const phone = ref('')
const message = ref('')
const submitting = ref(false)
const errors = reactive<{ name?: string; phone?: string; message?: string }>({})
const status = reactive<{ success: boolean; error: string | null }>({ success: false, error: null })

function validate(): boolean {
    errors.name = name.value.trim() ? '' : 'Обязательное поле'
    const digits = phone.value.replace(/\D/g, '')
    const phoneValid = digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'))
    errors.phone = phoneValid ? '' : 'Неверный формат телефона'
    errors.message = message.value.trim() ? '' : 'Обязательное поле'
    return !errors.name && !errors.phone && !errors.message
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
                type: 'message',
                name: name.value.trim(),
                phone: phone.value,
                message: message.value.trim(),
            },
        })
        status.success = true
        name.value = ''
        phone.value = ''
        message.value = ''
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