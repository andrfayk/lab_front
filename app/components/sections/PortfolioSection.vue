<template>
    <section id="portfolio" class="mb-8 scroll-mt-30">
        <h2 class="font-semibold font-heading text-xl md:text-2xl mb-4">Работы</h2>
        <PhotoCarousel :photos="photos"/>
    </section>
</template>

<script setup lang="ts">
import portfolioService from "~/services/portfolioService"
import { onMounted, ref } from "vue"

const photos = ref()
onMounted(async () => {
    photos.value = await portfolioService.getPhotos()
    console.log(photos.value)
})
</script>

<style scoped>

</style>