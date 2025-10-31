<script setup>
    const { favorites } = useGetFavorites()
</script>

<template>
    <div class="w-full grid h-[calc(100vh-100px)] overflow-hidden">
        <h1 class="w-full text-center font-bold text-[40px] text-[#F5F5F5] capitalize">Favoritos</h1>
        <div id="ProductsFavoritesContainer" class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-3 py-2 overflow-y-auto place-items-center">
            <ProductCardFav v-for="(product, index) in favorites" :key="index" :product="product"/>
        </div>
    </div>
</template>

<style>
    #ProductsFavoritesContainer::-webkit-scrollbar {
        width: 8px;
    }

    #ProductsFavoritesContainer::-webkit-scrollbar-track {
        background: transparent;
    }

    #ProductsFavoritesContainer::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 8px;
    }

    #ProductsFavoritesContainer::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>