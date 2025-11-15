// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['./app/assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    modules: ['@nuxtjs/google-fonts', '@nuxt/image'],
    image: {
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/dqeviqzks/image/upload/v1756283194/'
        }
    },
    googleFonts: {
        families: {
            Montserrat: [400, 600, 700],
            Roboto: [400, 500, 700],
        },
        display: 'swap',
        preload: true
    },
})