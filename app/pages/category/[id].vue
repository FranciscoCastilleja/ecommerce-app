<script setup>
    const route = useRoute();

    const { data } = await useFetch(`https://dummyjson.com/products/category/${route.params.id}`);

    const filters = ref({
        sort: 'default',
        brands: [],
        price: { min: null, max: null },
        ratings: null
    })

    const originalProducts = ref([...data.value.products])

    function updateFilters(newFilters) {
        filters.value = newFilters
    }

    const filteredProducts = computed(() => {
        let products = [...originalProducts.value]

        if (filters.value.brands.length > 0) {
            products = products.filter(p => filters.value.brands.includes(p.brand))
        }

        const min = filters.value.price.min
        const max = filters.value.price.max

        if (min != null && max != null && min > max) {
            
        } else {
            if (min != null) products = products.filter(p => p.price >= min)
            if (max != null) products = products.filter(p => p.price <= max)
        }

        if (filters.value.ratings != null) {
            products = products.filter(p => p.rating >= filters.value.ratings)
        }

        switch (filters.value.sort) {
            case "price-asc":
                products.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                products.sort((a, b) => b.price - a.price)
                break
            case "rating-desc":
                products.sort((a, b) => b.rating - a.rating)
                break
            case "discount-desc":
                products.sort((a, b) => b.discountPercentage - a.discountPercentage)
                break
            case "name-asc":
                products.sort((a, b) => a.title.localeCompare(b.title))
                break
            case "name-desc":
                products.sort((a, b) => b.title.localeCompare(a.title))
                break
            default:
                break;
        }

        return products
    })
</script>

<template>
    <div class="flex h-[calc(100vh-100px)] items-center">
        <FilterBar @filtersChanged="updateFilters" />
        <div class="grid w-[85%] h-[625px] overflow-y-auto place-items-center">
            <h2 class="w-full text-center font-bold text-[40px] text-[#F5F5F5] capitalize">Categoría {{ $route.params.id }}</h2>
            <div id="ProductsContainer" class="grid w-[90%] h-[500px] overflow-y-auto grid-cols-3 gap-10">
                <ProductCard v-for="product in filteredProducts" :product="product" />
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