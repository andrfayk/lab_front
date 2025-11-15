<template>
<header
    id="header"
    :class="{ 'shadow-none': showMenu }"
    class="sm:h-20 p-4 md:p-6 rounded-b-xl bg-white flex items-center justify-end transition-all duration-400 ease-in-out z-20 w-full shadow sticky top-0 mb-4 sm:-mb-16 md:-mb-9 lg:-mb-10">
        <button
            @click="showMenu = !showMenu"
            class="flex flex-col gap-[5px] w-6 h-8 items-center justify-center relative sm:hidden cursor-pointer"
            aria-expanded="false"
            aria-haspopup="true"
            aria-controls="primary-navigation"
            aria-label="Открыть главное меню"
        >
            <span :class="{ 'rotate-45 translate-y-[7px]': showMenu }" class="bg-gray-500 w-full h-[1.5px] rounded transition duration-500 ease-in-out"></span>
            <span :class="{ 'opacity-0': showMenu }" class="bg-gray-500 w-full h-[1.5px] rounded transition duration-400 ease-in-out"></span>
            <span :class="{ '-rotate-45 -translate-y-[6px]': showMenu }" class="bg-gray-500 w-full h-[1.5px] rounded transition duration-500 ease-in-out"></span>
        </button>
    <a
        href="#top"
        @click="() => showMenu = false"
        :class="{ 'shadow-none': showMenu }"
        class="sm:w-28 sm:h-28 h-22 cursor-pointer w-22 absolute left-4 md:left-6 translate-y-1/5 bg-white shadow rounded-full transition-all z-30 duration-400 ease-in-out"
        aria-label="На верх страницы">
        <Logo class=" w-full h-full "/>
        <span
            class="w-[150%] h-full -z-10 absolute bottom-[30px] sm:bottom-[39px] -left-2 sm:-left-1 bg-white"></span>
    </a>
    <nav class="hidden sm:block" role="navigation" aria-label="Основная навигация">
        <div class="flex gap-6 font-semibold h-10 items-center font-button">
            <a
                @click="() => showMenu = false"
                href="#about"
                class="cursor-pointer after:bg-[#ACF3FF] select-none focus-visible:!outline-none focus-visible:after:h-1 after:h-[2px] hover:after:h-1 after-transition-all after:duration-500 after:block after:mt-[1px] h-4 after:rounded-2xl"
            >
                О нас
            </a>
            <a
                @click="() => showMenu = false"
                href="#portfolio"
                class="cursor-pointer after:bg-[#ACF3FF] select-none focus-visible:!outline-none focus-visible:after:h-1 after:h-[2px] hover:after:h-1 after-transition-all after:duration-500 after:block after:mt-[1px] h-4 after:rounded-2xl"
            >
                Работы
            </a>
            <a
                @click="() => showMenu = false"
                href="#contacts"
                class="cursor-pointer after:bg-[#ACF3FF] select-none focus-visible:!outline-none focus-visible:after:h-1 after:h-[2px] hover:after:h-1 after-transition-all after:duration-500 after:block after:mt-[1px] h-4 after:rounded-2xl"
            >
                Контакты
            </a>
        </div>
    </nav>
</header>
<nav
    :class="{ 'translate-y-[0%]': showMenu }"
    id="primary-navigation"
    class="bg-white shadow p-6 pb-8 w-full sm:hidden font-button -translate-y-[250%] transition rounded-b-xl duration-500 ease-in-out flex flex-col items-center sm:items-end gap-4 font-semibold sticky top-15 z-10"
    role="navigation" aria-label="Мобильная навигация"
>
    <a
        @click="() => showMenu = false"
        href="#about"
        class="after:bg-[var(--color-primary)] select-none after:h-[1.5px] active:after:h-0.5 after-transition-all after:duration-300 after:block active:text-[] after:mt-[1px] h-4 after:rounded-2xl w-full text-right cursor-pointer"
    >
        О нас
    </a>
    <a
        @click="() => showMenu = false"
        href="#portfolio"
        class="after:bg-[var(--color-primary)] select-none after:h-[1.5px] active:after:h-0.5 after-transition-all after:duration-300 after:block after:mt-[1px] h-4 after:rounded-2xl w-full text-right cursor-pointer"
    >
        Работы
    </a>
    <a
        @click="() => showMenu = false"
        href="#contacts"
        class="after:bg-[var(--color-primary)] select-none after:h-[1.5px] active:after:h-0.5 after-transition-all after:duration-3s00 after:block after:mt-[1px] h-4 after:rounded-2xl w-full text-right cursor-pointer"
    >
        Контакты
    </a>
</nav>
</template>

<script setup lang="ts">
import Logo from "~/components/Logo.vue"
const showMenu = ref(false)

</script>

<style scoped>

</style>