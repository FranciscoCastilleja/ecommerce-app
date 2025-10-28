<script setup>
  const { data } = await useFetch('https://dummyjson.com/products/categories');
</script>

<template>
  <div class="flex relative h-[calc(100vh-100px)] overflow-hidden z-0">
    <CategoriesBar />
    <div id="ProductsListContainer" class="flex relative flex-col flex-1 w-full py-8 px-6 gap-8 overflow-y-auto z-0">
      <ProductsList v-for="categorie in data" :cat="categorie.slug" :name="categorie.name"></ProductsList>
    </div>
  </div>
</template>

<style>
    #ProductsListContainer::-webkit-scrollbar {
        width: 8px;
    }

    #ProductsListContainer::-webkit-scrollbar-track {
        background: transparent;
    }

    #ProductsListContainer::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 8px;
    }

    #ProductsListContainer::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>