<template>
    <div class="relative">
        <textarea
            :name="name"
            :placeholder="placeholder"
            :value="modelValue"
            @input="onInput"
            class="w-full resize-none h-full p-2 text-black placeholder:text-gray-400 focus:outline-[var(--color-primary)] bg-gray-200 rounded-xl"
        ></textarea>
        <span v-if="error" class="text-red-400 left-2 -bottom-[15px] absolute text-[11px]">{{ error }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    error: String,
    modelValue: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

function onInput(e: Event) {
    const target = e.target as HTMLTextAreaElement
    emit('update:modelValue', target.value)
}

</script>


<style scoped>

</style>