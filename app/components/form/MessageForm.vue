<template>
    <form class="w-full">
        <fieldset class="grid border shadow border-gray-300 rounded-xl p-4 pt-3 grid-cols-1 gap-4">
            <legend class="font-semibold font-heading text-sm w-max">Написать сообщение</legend>
            <FormInput name="name" type="text" placeholder="Имя"/>
            <FormInput name="phone" type="tel" placeholder="Телефон"/>
            <TextArea name="message" placeholder="Сообщение"/>
            <FormButton>Отправить</FormButton>
        </fieldset>
    </form>
</template>

<script setup lang="ts">

import TextArea from "~/components/form/TextArea.vue";
</script>

<style scoped>

</style>