<script setup>
  const { data } = await useFetch('https://dummyjson.com/products/categories');
</script>

<template>
  <div class="flex h-[calc(100vh-100px)] items-center">
    <CategoriesBar />
    <div id="ProductsListContainer" class="grid py-60 w-[90%] h-[625px] col-start-3 col-end-7 overflow-y-auto place-items-center gap-[500px]">
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