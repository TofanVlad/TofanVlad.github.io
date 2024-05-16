<script setup lang=ts>
import myChip from './my-chip.vue';
import myDescription from './my-description.vue';
defineProps<{
    title: { en: string, ro: string };
    year: number;
    tehnologies: string[];
    description: { en: string, ro: string };
}>()
</script>

<template>
    <div class="tracking-wide flex flex-col md:mt-0 mt-4 lg:gap-2 md:gap-1 gap-2 overflow-hidden">
        <div>
            <p class="xl:text-sm text-base tracking-widest">{{ $t("card.year") }}</p>
            <h2 class="lg:text-4xl md:text-[4vw] text-[6vw] leading-none">{{ year }}</h2>
        </div>
        <div>
            <p class="xl:text-sm text-base tracking-widest">{{ $t('card.role') }}</p>
            <h2 class="lg:text-4xl md:text-[4vw] text-[6vw] leading-none">FRONTEND DEVELOPER</h2>
        </div>
        <div>
            <p class="xl:text-sm text-base tracking-widest">{{ $t('card.tehnologies') }}</p>
            <div class="flex flex-wrap gap-2 pl-1 mt-2 pb-1">
                <my-chip v-for="(item, index) in tehnologies" :key="index" :text="item" />
            </div>
        </div>
        <my-description :text="description" />
    </div>
</template>