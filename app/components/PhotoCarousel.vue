<template>
    <div class="relative">
        <!-- Main carousel -->
        <div
            ref="carouselRef"
            class="flex relative overflow-x-scroll snap-x snap-mandatory no-scrollbar rounded-xl shadow mb-2 h-[60vh] md:h-[50dvh]"
            :class="isModalOpen ? 'overflow-hidden pointer-events-none' : ''"
            @scroll="onCarouselScroll"
        >
            <div
                v-for="(photo, idx) in photos"
                :key="photo.id"
                :ref="(el) => (slideRefs[idx] = el as HTMLDivElement)"
                @click="openModal(idx)"
                class="group cursor-pointer relative bg-[url(assets/images/bg.png)] flex items-center justify-center bg-[length:40px] bg-repeat min-w-full snap-start"
            >
                <NuxtImg
                    :src="photo.name"
                    provider="cloudinary"
                    alt="Фото работы"
                    loading="eager"
                    class="object-contain h-full rounded-2xl select-none"
                />
            </div>
        </div>

        <!-- Prev/Next buttons -->
        <button
            class="hidden shadow sm:flex items-center justify-center select-none absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer p-2 bg-white/60 backdrop-blur-xs rounded-2xl active:scale-95 transition"
            @click="prev"
            aria-label="Предыдущее фото"
        >
            <ChevronLeftIcon class="h-6 w-6"/>
        </button>
        <button
            class="hidden shadow sm:flex items-center justify-center select-none absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer p-2 bg-white/60 backdrop-blur-xs rounded-2xl active:scale-95 transition"
            @click="next"
            aria-label="Следующее фото"
        >
            <ChevronRightIcon class="h-6 w-6"/>
        </button>
    </div>

    <!-- Thumbnails -->
    <div ref="thumbsRef"
         class="flex shadow p-2 rounded-xl cursor-pointer bg-gray-100 overflow-x-scroll no-scrollbar gap-2">
        <button
            v-for="(photo, idx) in photos"
            :key="photo.id"
            :ref="(el) => (thumbItemRefs[idx] = el as HTMLButtonElement)"
            type="button"
            class="relative shrink-0"
            @click="goTo(idx)"
            :aria-current="idx === currentIndex ? 'true' : 'false'"
        >
            <NuxtImg
                :src="photo.name"
                provider="cloudinary"
                alt="Миниатюра фото"
                loading="lazy"
                class="object-cover aspect-square rounded-lg h-10 sm:rounded-xl sm:h-14 md:h-16"
                :class="idx === currentIndex ? 'ring-3 ring-[var(--color-primary)]  ring-offset-2' : 'ring-0'"
            />
        </button>
    </div>

    <!-- Fullscreen modal -->
    <transition name="fade">
        <div v-if="isModalOpen"
             @click="onShowActions"
             class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2"
             @click.self="closeModal">
            <button
                :class="{ 'opacity-100': showActions }"
                class="absolute opacity-0 top-4 right-4 z-20 text-white/80 bg-white/20 hover:bg-white/30 p-2  cursor-pointer rounded-xl transition duration-300 hover:text-white" @click="closeModal"
                aria-label="Закрыть"
            >
                <XMarkIcon class="w-5 h-5"/>
            </button>

            <div class="relative w-full h-full flex items-center justify-center">
                <!-- Loader while original loads -->
                <div v-if="isModalLoading" class="absolute inset-0 flex items-center justify-center">
                    <span class="loader" aria-label="Загрузка"/>
                </div>

                <!-- Original image without downscaling (no explicit width/height) -->
                <NuxtImg
                    v-if="activePhoto"
                    :src="activePhoto.name"
                    provider="cloudinary"
                    :quality="99"
                    loading="eager"
                    alt="Фото в полноэкранном режиме"
                    class="max-w-full max-h-full  object-contain select-none"
                    @load="onModalImageLoaded"
                />

                <!-- Modal navigation -->
                <button
                    :class="{ 'opacity-100': showActions }"
                    class="flex opacity-0 items-center justify-center select-none absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer p-3 bg-white/20 hover:bg-white/30 text-white rounded-2xl active:scale-95 transition duration-300"
                    @click.stop="prev"
                    aria-label="Предыдущее фото"
                >
                    <ChevronLeftIcon class="h-6 w-6"/>
                </button>
                <button
                    :class="{ 'opacity-100': showActions }"
                    class="flex opacity-0 items-center justify-center select-none absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer p-3 bg-white/20 hover:bg-white/30 text-white rounded-2xl active:scale-95 transition duration-300"
                    @click.stop="next"
                    aria-label="Следующее фото"
                >
                    <ChevronRightIcon class="h-6 w-6"/>
                </button>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import {ref, computed, watch, nextTick, onMounted, onBeforeUnmount} from 'vue'
import type {Photo} from '~/types/photo'
import {ChevronLeftIcon, ChevronRightIcon, XMarkIcon} from '@heroicons/vue/24/outline'

type Props = {
    photos: Photo[]
}

const props = defineProps<Props>()

// State
const currentIndex = ref(0)
const carouselRef = ref<HTMLDivElement | null>(null)
const slideRefs = ref<HTMLDivElement[]>([])
const thumbsRef = ref<HTMLDivElement | null>(null)
const thumbItemRefs = ref<HTMLButtonElement[]>([])

// Modal state
const isModalOpen = ref(false)
const isModalLoading = ref(false)

const activePhoto = computed(() => props.photos[currentIndex.value])

// Helpers
function goTo(index: number) {
    if (!props.photos?.length) return
    const len = props.photos.length
    currentIndex.value = ((index % len) + len) % len // wrap-around
    // When navigating inside modal, show loader for the next image until it loads
    if (isModalOpen.value) {
        isModalLoading.value = true
    }
    scrollToActiveSlide()
}

function next() {
    goTo(currentIndex.value + 1)
}

function prev() {
    goTo(currentIndex.value - 1)
}

function scrollToActiveSlide() {
    nextTick(() => {
        const el = slideRefs.value[currentIndex.value]
        // While modal is open, switch instantly (no smooth animation)
        el?.scrollIntoView({behavior: isModalOpen.value ? 'auto' : 'smooth', inline: 'start', block: 'nearest'})
    })
}

function ensureActiveThumbVisible() {
    nextTick(() => {
        const el = thumbItemRefs.value[currentIndex.value]
        el?.scrollIntoView({behavior: isModalOpen.value ? 'auto' : 'smooth', inline: 'center', block: 'nearest'})
    })
}

watch(currentIndex, () => {
    ensureActiveThumbVisible()
})

// Modal handlers
function openModal(index?: number) {
    if (typeof index === 'number') currentIndex.value = index
    isModalOpen.value = true
    isModalLoading.value = true
    onShowActions()
    // focus for keyboard nav
    addKeyListeners()
}

function closeModal() {
    isModalOpen.value = false
    isModalLoading.value = false
    removeKeyListeners()
    // Sync main carousel position to the last viewed slide
    scrollToActiveSlide()
}

function onModalImageLoaded() {
    isModalLoading.value = false
}

// Keyboard accessibility for modal
function handleKeydown(e: KeyboardEvent) {
    if (!isModalOpen.value) return
    if (e.key === 'Escape') {
        e.preventDefault()
        closeModal()
    } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
    }
}

function addKeyListeners() {
    window.addEventListener('keydown', handleKeydown)
}

function removeKeyListeners() {
    window.removeEventListener('keydown', handleKeydown)
}

onMounted(() => {
    ensureActiveThumbVisible()
})

onBeforeUnmount(() => {
    removeKeyListeners()
})

// --- Update active index on user scroll/swipe ---
// Debounced detection of active slide: update only after scroll stops
let scrollTimeout: number | null = null

function onCarouselScroll() {
    if (!carouselRef.value) return
    if (scrollTimeout) window.clearTimeout(scrollTimeout)
    scrollTimeout = window.setTimeout(() => {
        const el = carouselRef.value!
        const {scrollLeft, clientWidth} = el
        if (clientWidth === 0) return
        const idx = Math.round(scrollLeft / clientWidth)
        if (idx !== currentIndex.value && idx >= 0 && idx < props.photos.length) {
            currentIndex.value = idx
        }
        scrollTimeout = null
    }, 120) // adjust debounce as needed
}

const showActions = ref(false)

const onShowActions = () => {
    showActions.value = true
    setTimeout(() => showActions.value = false, 3000)
}

</script>

<style scoped>
/* Simple fade for modal */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.15s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

/* Minimal loader */
.loader {
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-top-color: white;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>