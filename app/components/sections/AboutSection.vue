<template>
<section id="about" class="sm:mt-28 scroll-mt-30 md:mt-18">
    <div class="flex flex-col md:gap-2 items-center mb-6 font-heading">
        <h1 class="text-lg sm:text-xl md:text-2xl font-bold text-center">
            Зуботехническая лаборатория в Москве
            <span class="whitespace-nowrap">ProFit Lab</span>
        </h1>
        <h6 class="text-center md:text-lg italic">Ваши пациенты – наша гордость.</h6>
    </div>
    <CallBackForm class="md:hidden mb-4"/>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        <div class="col-span-1 flex flex-col gap-4">
            <CallBackForm class="hidden md:block"/>
            <p class="bg-black/5 shadow rounded-xl p-4 md:text-lg leading-relaxed">
                Здравствуйте. Мы — зуботехническая лаборатория, работающая с клиниками и частными стоматологами в Москве. Специализируемся на изготовлении несъемных керамических конструкций: диоксид циркония, пресс-керамика, виниры, вкладки.
            </p>
            <fieldset
                class="border-2 shadow md:text-lg border-[var(--color-primary)] p-4 -mt-2.5 pt-1 rounded-xl flex flex-col"
            >
                <legend class="font-semibold font-heading w-max text-[#82C8D5]">Обеспечиваем</legend>
                <ul class="flex flex-col gap-2 font-semibold">
                    <li v-for="advantage in advantages" class="flex gap-2 items-center">
                        <TeethIcon/>
                        {{ advantage }}
                    </li>
                </ul>
            </fieldset>
        </div>
        <div class="col-span-1 gap-4 flex flex-col">
            <div id="photo" class="relative rounded-xl shadow overflow-hidden">
                <NuxtImg
                    src="Maxim_Pasov_l53sd2"
                    provider="cloudinary"
                    alt="Фото Максима Пасова"
                    class="aspect-square object-cover object-[center_25%] w-full"
                />
                <div
                    class="absolute sm:hidden inset-0 flex items-end bg-gradient-to-t from-black/55 via-black/30 to-transparent"
                >
                    <div class="p-4 text-white">
                        <h2 class="text-lg font-heading sm:text-xl md:text-2xl font-semibold">
                            Пасов Максим Дмитриевич
                        </h2>
                        <p>Владелец лаборатории, практикующий врач стоматолог ортопед, хирург.</p>
                    </div>
                </div>
            </div>
            <div class="hidden sm:block md:text-lg bg-black/5 p-4 rounded-xl">
                <h2 class="text-lg font-heading sm:text-xl md:text-2xl font-semibold">
                    Пасов Максим Дмитриевич
                </h2>
                <p>
                    Владелец зуботехнической лаборатории ProFit Lab, практикующий врач стоматолог ортопед, хирург.
                </p>
            </div>
            <div class="hidden md:block lg:hidden bg-black/5 p-4 rounded-xl text-[17px] shadow">
                Сайт в процессе наполнения, свяжитесь с нами для получения дополнительной информации
            </div>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
import TeethIcon from "~/components/icons/TeethIcon.vue";
import CallBackForm from "~/components/form/CallBackForm.vue";

const advantages = ['Чёткое соблюдение сроков', 'Прогнозируемое качество без доработок', 'Персональный подход', 'Оперативную коммуникацию с техником', 'Доставку по Москве']
</script>