<template>
    <div class="relative">
        <textarea
            :name="name"
            :placeholder="placeholder"
            class="w-full resize-none h-full p-2 text-black placeholder:text-gray-400 focus:outline-[var(--color-primary)] bg-gray-200 rounded-xl"
        ></textarea>
        <span v-if="error" class="text-red-400 left-2 -bottom-[15px] absolute text-xs">{{ error }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    error: String,
})

</script>


<style scoped>

</style>