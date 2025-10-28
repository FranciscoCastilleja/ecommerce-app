<script setup>
    const { data } = await useFetch('https://dummyjson.com/products/categories');
</script>

<template>
    <div id="CategoriesBar" class="w-48 h-full bg-[#1E1E1E] flex flex-col items-center px-2 pb-2 gap-3 overflow-y-auto">
        <h2 class="sticky w-[90%] py-5 text-center font-bold text-[#F5F5F5] top-0 bg-[#1E1E1E] border-b border-[#F5F5F5]">Categorías</h2>
        <NuxtLink v-for="category in data" :to="{ name: 'category-id', params: { id: category.slug } }" class="w-[90%] py-5 text-center text-[#F5F5F5] border border-[#F5F5F511] rounded-lg hover:text-[#E55E00] hover:border-[#E55E00]" :key="category">
            {{ category.name }}
        </NuxtLink>
    </div>
</template>

<style>
    #CategoriesBar::-webkit-scrollbar {
        width: 8px;
    }

    #CategoriesBar::-webkit-scrollbar-track {
        background: #1E1E1E;
    }

    #CategoriesBar::-webkit-scrollbar-thumb {
        background: #333333;
    }

    #CategoriesBar::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>