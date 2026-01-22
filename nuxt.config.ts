// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['./app/assets/css/main.css'],
    runtimeConfig: {
        BOT_TOKEN: process.env.BOT_TOKEN,
        CHAT_IDS: process.env.CHAT_IDS,
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
        server: {
            proxy: {
                '/api': {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                }
            }
        },
    },
    modules: ['@nuxtjs/google-fonts', '@nuxt/image', 'nuxt-simple-sitemap', 'nuxt-simple-robots'],
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
    app: {
        head: {
            htmlAttrs: { lang: 'ru' },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'ProfitLab – зуботехническая лаборатория в Москве',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Зуботехническая лаборатория в Москве. Изготовление диоксида циркония, пресс-керамики, виниров и вкладок. Пасов Максим Дмитриевич, практикующий стоматолог-ортопед' },
                { name: 'robots', content: 'index, follow' },
                { name: 'theme-color', content: '#ACF3FF' },
                { property: 'og:title', content: 'ProfitLab – зуботехническая лаборатория в Москве' },
                { property: 'og:description', content: 'Зуботехническая лаборатория в Москве. Изготовление диоксида циркония, пресс-керамики, виниров и вкладок. Пасов Максим Дмитриевич, практикующий стоматолог-ортопед' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://profitlab77.ru' },
                { property: 'og:site_name', content: 'ProfitLab' },
                { property: 'og:locale', content: 'ru_RU' },
                { property: 'og:image', content: 'https://profitlab77.ru/logo.png' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'ProfitLab – зуботехническая лаборатория в Москве' },
                { name: 'twitter:description', content: 'Пасов Максим Дмитриевич – практикующий врач стоматолог ортопед, хирург' },
                { name: 'twitter:image', content: 'https://profitlab77.ru/logo.png' },
                {
                    name: 'keywords',
                    content: 'Зуботехническая лаборатория в Москве, Зуботехническая лаборатория Москва, Зуботехническая лаборатория, диоксид циркония, пресс-керамика, виниры, вкладки, Пасов, Максим Пасов, Пасов Максим, Пасов Максим Дмитриевич, зубы, несъемные керамические конструкции, стоматолог, профитлаб, профит лаб, profitlab, profit lab'
                }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png' },
                { rel: 'canonical', href: 'https://profitlab77.ru/' },
                { rel: 'alternate', hreflang: 'ru', href: 'https://profitlab77.ru/' },
                { rel: 'alternate', hreflang: 'x-default', href: 'https://profitlab77.ru/' },
                { rel: 'preconnect', href: 'https://res.cloudinary.com', crossorigin: '' },
                { rel: 'preconnect', href: 'https://mc.yandex.ru', crossorigin: '' },
            ],
            script: [
                {
                    children: `
                        (function (m, e, t, r, i, k, a) {
                            m[i] = m[i] || function () {
                                (m[i].a = m[i].a || []).push(arguments)
                            };
                            m[i].l = 1 * new Date();
                            for (var j = 0; j < document.scripts.length; j++) {
                                if (document.scripts[j].src === r) {
                                    return;
                                }
                            }
                            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
                        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=104149573', 'ym');
                        ym(104149573, 'init', {
                            ssr: true,
                            webvisor: true,
                            clickmap: true,
                            ecommerce: "dataLayer",
                            accurateTrackBounce: true,
                            trackLinks: true
                        });
                    `,
                    type: 'text/javascript'
                },
                {
                    type: 'application/ld+json',
                    children: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'ProfitLab',
                        url: 'https://profitlab77.ru',
                        logo: 'https://profitlab77.ru/favicon.ico',
                        sameAs: ['https://t.me/profitlab'],
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Славянский бульвар',
                            addressRegion: 'Москва',
                            addressLocality: 'Москва',
                            addressCountry: 'RU'
                        },
                        contactPoint: [
                            {
                                '@type': 'ContactPoint',
                                telephone: '+79269998816',
                                contactType: 'customer service',
                                areaServed: 'RU'
                            }
                        ]
                    })
                },
                {
                    type: 'application/ld+json',
                    children: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        name: 'ProfitLab',
                        url: 'https://profitlab77.ru',
                        potentialAction: {
                            '@type': 'SearchAction',
                            target: 'https://profitlab77.ru/?q={search_term_string}',
                            'query-input': 'required name=search_term_string'
                        }
                    })
                }
            ],
            noscript: [
                {
                    children: `<div><img src="https://mc.yandex.ru/watch/104149573" style="position:absolute; left:-9999px;" alt="" /></div>`
                }
            ]
        },
    },
    sitemap: {
        siteUrl: 'https://profitlab77.ru',
    },
})