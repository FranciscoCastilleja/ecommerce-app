<script setup>
    const route = useRoute();
</script>

<template>
    <div class="flex h-[calc(100vh-100px)] items-center">
        <FilterBar />
        <div class="grid w-[85%] h-[625px] overflow-y-auto place-items-center">
            <h2 class="w-full text-center font-bold text-[40px] text-[#F5F5F5] capitalize">Categoría {{ $route.params.id }}</h2>
            <div id="ProductsContainer" class="grid w-[90%] h-[500px] overflow-y-auto grid-cols-3 gap-10">
                <ProductCard :cat="route.params.id" />
            </div>
        </div>
    </div>
</template>

<style>
    #ProductsContainer::-webkit-scrollbar {
        width: 8px;
    }

    #ProductsContainer::-webkit-scrollbar-track {
        background: transparent;
    }

    #ProductsContainer::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 8px;
    }

    #ProductsContainer::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>