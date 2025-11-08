<script setup>
    const { data } = await useFetch('https://dummyjson.com/products?limit=194');

    const productsSearch = ref([])

    watchEffect(() => {
        if (data.value?.products) {
            productsSearch.value = data.value.products
        }
    })

    const search = ref('')

    const filteredProducts = computed(() => {
        if (!search.value.trim()) return productsSearch.value.products

        const query = search.value.toLowerCase()

        return productsSearch.value.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        )
    })

    const showResults = ref(false)

    function handleFocus() {
        showResults.value = true
    }

    function handleBlur() {
        setTimeout(() => (showResults.value = false), 150)
    }

    function toSlug(name) {
        return name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
    }

    const dropFav = (event) => {
        event.preventDefault();
        const { currentTarget, dataTransfer } = event

        useAddFavorite(Number(dataTransfer.getData('text/plain')))
    }

    const dropCart = (event) => {
        event.preventDefault();
        const { currentTarget, dataTransfer } = event

        useAddCart(Number(dataTransfer.getData('text/plain')))
    }

    const dragOver = (event) => {
        event.preventDefault();
    }

    const dragLeave = (event) => {
        event.preventDefault();
    }
</script>

<template>
    <header class="flex relative h-[100px] bg-[#1E1E1E] border-b border-[#F5F5F5] items-center justify-around z-10">
        <NuxtLink href="/">
            <h1 class="text-[#F5F5F5] text-2xl font-bold">E-commerce App</h1>
        </NuxtLink>
        <div class="relative w-[550px]">
            <input type="search" name="" id="" v-model="search" @focus="handleFocus" @blur="handleBlur" class="flex pl-[10px] w-full h-[30px] rounded-md focus:outline-none" placeholder="Encuentra lo que buscas">
            <div v-if="search && showResults" id="ProductsSearchContainer" class="absolute top-7 left-0 w-full bg-[#1E1E1E] border border-[#333333] rounded-md shadow-md mt-1 max-h-[300px] overflow-auto transition-all">
                <NuxtLink v-for="p in filteredProducts" :key="p.id" :to="`/products/${p.id}/${toSlug(p.title)}`" class="flex px-3 py-2 border-b border-[#333333] hover:bg-[#3E3E3E] cursor-pointer justify-between items-center gap-5">
                    <img :src="p.thumbnail" :alt="p.title" class="size-20">
                    <div class="justify-start w-64">
                        <p class="font-medium text-[#F5F5F5]">{{ p.title }}</p>
                        <p class="text-sm text-[#B3B3B3]">{{ p.category }}</p>
                    </div>
                    <p class="text-lg text-[#FF6A00]">${{ Math.round((p.price - (p.price * p.discountPercentage / 100)) * 100) / 100 }}</p>
                </NuxtLink>
                <div v-if="filteredProducts.length === 0" class="p-3 text-[#B3B3B3] text-center">
                    No se encontraron resultados
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center gap-5">
            <NuxtLink href="/favorite" class="flex text-[#B3B3B3] size-[50px] justify-center items-center hover:text-[#E55E00]" v-on:drop="dropFav" v-on:dragover="dragOver" v-on:dragleave="dragLeave">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
            </NuxtLink>
            <NuxtLink href="/cart" class="flex relative text-[#B3B3B3] size-[50px] justify-center items-center hover:text-[#E55E00]" v-on:drop="dropCart" v-on:dragover="dragOver" v-on:dragleave="dragLeave">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                <span class="flex absolute size-10 bg-[#274B7B] rounded-full top-5 left-5 scale-[.65] justify-center items-center">{{ useGetCart().cart.value.length }}</span>
            </NuxtLink>
        </div>
    </header>
</template>

<style>
    #ProductsSearchContainer::-webkit-scrollbar {
        width: 8px;
    }

    #ProductsSearchContainer::-webkit-scrollbar-track {
        background: transparent;
    }

    #ProductsSearchContainer::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 8px;
    }

    #ProductsSearchContainer::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>