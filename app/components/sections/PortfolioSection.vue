<template>
    <section id="portfolio" class="mb-8 scroll-mt-30">
        <h2 class="font-semibold font-heading text-xl md:text-2xl mb-4">Работы</h2>
        <PhotoCarousel :photos="images"/>
    </section>
</template>

<script setup lang="ts">


const images = [
    { id: 1, name: "IMG_1526_b2meic" },
    { id: 2, name: "20230902-20230902-IMG_0993_imcjmk" },
    { id: 3, name: "20230902-IMG_1006_vzkgzi" },
    { id: 4, name: "20250625-IMG_9980_iqwvv0" },
    { id: 5, name: "20250625-IMG_9981_upqhe6" },
    { id: 6, name: "20250625-IMG_9971_hswmiu" },
    { id: 7, name: "20250625-IMG_9978_sblau5" },
    { id: 8, name: "20250625-IMG_9972_kglbpn" },
    { id: 9, name: "20250625-IMG_9979_wdylki" },
    { id: 10, name: "20250701-IMG_0099_ocjton" },
    { id: 11, name: "20250701-IMG_0059_k3dxar" },
    { id: 12, name: "20250701-IMG_0141_rhlrjg" },
    { id: 13, name: "20250701-IMG_0122_vwiz5u" },
    { id: 14, name: "20250701-IMG_0128_iomme5" },
    { id: 15, name: "20220214-IMG_6679-2_snuyb4" },
    { id: 16, name: "20230410-IMG_9129_bk8q7u" },
    { id: 17, name: "20250522-IMG_9914_znoeoz" },
    { id: 18, name: "20250522-IMG_9918_w7aftv" },
    { id: 19, name: "20250522-IMG_9931_pc97kb" }
];

</script>

<style scoped>

</style>