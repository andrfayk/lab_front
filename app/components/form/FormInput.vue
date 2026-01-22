<template>
    <div class="relative">
        <input
            :name="name"
            :placeholder="placeholder"
            :type="type"
            :value="displayValue"
            @input="onInput"
            @keydown="onKeydown"
            class="bg-gray-200 w-full font-button placeholder:font-button text-black p-2 placeholder:text-gray-400 focus:outline-[var(--color-primary)] rounded-xl"
        />
        <span
            v-if="error"
            class="text-red-400 left-2 -bottom-[15px] absolute text-[11px] select-none"
        >
      {{ error }}
    </span>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
    name: { type: String, required: true },
    placeholder: { type: String, required: true },
    type: { type: String, required: true },
    error: String,
    modelValue: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])
const displayValue = ref(props.modelValue)

watch(
    () => props.modelValue,
    (val) => {
        if (val !== displayValue.value) {
            displayValue.value = props.type === 'tel' ? formatPhone(val || '') : val || ''
        }
    }
)

function onKeydown(e: KeyboardEvent) {
    if (props.type !== 'tel') return

    const allowed = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab']
    if (allowed.includes(e.key)) return

    const digits = displayValue.value.replace(/\D/g, '')
    if (/\d/.test(e.key) && digits.length >= 11) {
        e.preventDefault()
    }

    if (!/\d/.test(e.key)) e.preventDefault()
}

function onInput(e: Event) {
    const target = e.target as HTMLInputElement

    if (props.type !== 'tel') {
        displayValue.value = target.value
        emit('update:modelValue', target.value)
        return
    }

    let digits = target.value.replace(/\D/g, '')
    digits = digits.slice(0, 11)
    const formatted = formatPhone(digits)

    displayValue.value = formatted
    emit('update:modelValue', formatted)
}

function formatPhone(digits: string): string {
    if (!digits) return ''

    if (digits.startsWith('8')) digits = '7' + digits.slice(1)
    else if (!digits.startsWith('7')) digits = '7' + digits

    let res = '+7'
    if (digits.length > 1) res += ` (${digits.slice(1, 4)}`
    if (digits.length >= 4) res += `) ${digits.slice(4, 7)}`
    if (digits.length >= 7) res += `-${digits.slice(7, 9)}`
    if (digits.length >= 9) res += `-${digits.slice(9, 11)}`

    return res
}
</script>