<template>
    <form id="callback_form">
        <fieldset class="border flex flex-col gap-4 shadow border-gray-300 rounded-xl -mt-2.5 p-4 pt-3">
            <legend class="text-gray-400 text-sm font-semibold font-heading w-max">Заказать звонок</legend>
            <FormInput
                v-model="name"
                name="name"
                placeholder="Имя"
                type="text"
            />
            <FormInput
                v-model="phone"
                name="phone"
                placeholder="Телефон"
                type="tel"
            />
            <FormButton>Отправить</FormButton>
        </fieldset>
    </form>
</template>

<script setup lang="ts">
import FormButton from "~/components/form/FormButton.vue";
import FormInput from "~/components/form/FormInput.vue";

const name = ref('')
const phone = ref('')
</script>

<style scoped>

</style>