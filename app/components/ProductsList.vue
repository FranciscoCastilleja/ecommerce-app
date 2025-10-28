<script setup>
    const props = defineProps({
        cat: String,
        name: String
    })
</script>

<template>
    <div class="flex relative w-[95%] h-fit border border-[#333333] rounded-lg overflow-x-auto gap-4 p-1">
        <h2 class="grid sticky w-52 h-[400px] left-0 text-white font-bold text-lg bg-[#121212] flex-shrink-0 place-items-center">{{ props.name }}</h2>
        <div id="ProductListContainer" class="flex px-2 relative w-[95%] h-fit overflow-x-auto gap-4">
            <ProductCard :cat="props.cat" />
        </div>
    </div>
</template>

<style>
    #ProductListContainer::-webkit-scrollbar {
        height: 8px;
    }

    #ProductListContainer::-webkit-scrollbar-track {
        background: transparent;
    }

    #ProductListContainer::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 8px;
    }

    #ProductListContainer::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>