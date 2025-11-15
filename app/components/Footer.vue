<template>
<footer
    id="contacts"
    class="bg-gray-700 text-white w-full grid gap-2 grid-cols-1 md:grid-cols-2 rounded-t-xl"
    role="contentinfo"
    aria-labelledby="footer-title"
>
    <h2 id="footer-title" class="sr-only">
        Контакты и форма связи
    </h2>
    <div
        class="col-span-1 sm:grid grid-cols-3 px-4 gap-2 md:flex flex flex-col md:pt-4 md:order-1 order-2"
    >
        <fieldset
            class="flex flex-wrap items-center sm:flex-col md:flex-row col-span-2 gap-4 pt-2 p-4 justify-evenly border rounded-xl"
            aria-labelledby="address-legend"
        >
            <legend id="address-legend" class="w-max">
                <MapPinIcon class="h-5 w-5"/>
            </legend>
            <address class="not-italic contents font-mono">
                <a
                    href="https://yandex.ru/maps/-/CLaNJEI5"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-gray-200 text-black flex cursor-pointer items-center gap-1 p-2 rounded-lg sm:w-full md:w-auto justify-between grow"
                    aria-label="Открыть карту — метро Кунцевская в новой вкладке"
                >
                    <img
                        src="../assets/images/metro.yWEbv731.png"
                        alt="Значок метро" class="w-4.5"
                    >
                    <p>Метро Кунцевская</p>
                </a>
                <a
                    href="https://yandex.ru/maps/-/CLaNJWm5"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-gray-200 text-black cursor-pointer flex items-center gap-1 p-2 rounded-lg sm:w-full md:w-auto justify-between grow"
                    aria-label="Открыть карту — Славянский бульвар в новой вкладке"
            >
                <MapIcon class="h-5 w-5"/>
                <p>Славянский бульвар</p>
                </a>
            </address>
        </fieldset>
        <fieldset
            class="flex flex-wrap h-full md:h-auto sm:mb-2 sm:flex-col md:flex-row gap-4 pt-2 p-4 justify-evenly sm:text-sm items-center md:justify-evenly border rounded-xl"
            aria-labelledby="phones-legend"
        >
            <legend id="phones-legend" class="w-max">
                <PhoneIcon class="h-5 w-5"/>
            </legend>
            <address class="not-italic contents font-mono text-sm sm:text-base">
                <a
                    href="tel:+79269998816"
                    class="underline cursor-pointer whitespace-nowrap"
                    aria-label="Позвонить по номеру +7 (926) 999-88-16"
                >
                    +7 (926) 999-88-16
                </a>
                <a
                    href="tel:+79253050859"
                    class="underline cursor-pointer whitespace-nowrap"
                    aria-label="Позвонить по номеру +7 (925) 305-08-59"
                >
                    +7 (925) 305-08-59
                </a>
            </address>
        </fieldset>
        <div class="placeholder bg-white/5 p-4 hidden lg:block rounded-xl text-[17px] shadow">
            Сайт в процессе наполнения, свяжитесь с нами для получения дополнительной информации
        </div>
    </div>
    <section class="col-span-1 px-4 pt-4 order-1 md:order-2" aria-labelledby="message-form-title">
        <h3 id="message-form-title" class="sr-only">Форма для сообщения</h3>
        <MessageForm/>
    </section>
    <div class="col-span-1 order-3 bg-gray-600 md:col-span-2 text-center mt-2" aria-label="Копирайт">
        © 2025 Profit Lab
    </div>
</footer>
</template>

<script setup lang="ts">
import { MapIcon, MapPinIcon, PhoneIcon } from "@heroicons/vue/24/outline"
import MessageForm from "~/components/form/MessageForm.vue"
</script>

<style scoped>

</style>