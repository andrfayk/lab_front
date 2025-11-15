<template>
<main id="main" class="flex flex-col gap-8 px-4 md:px-6 font-body">
    <AboutSection/>
    <PortfolioSection/>
</main>
</template>

<script setup lang="ts">
import AboutSection from "~/components/sections/AboutSection.vue";
import PortfolioSection from "~/components/sections/PortfolioSection.vue";
</script>