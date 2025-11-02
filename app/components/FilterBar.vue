<script setup>
    const route = useRoute();;

    const products = ref([]);

    const { data } = await useFetch(`https://dummyjson.com/products/category/${route.params.id}`);
    products.value = data.value.products;

    const brands = computed(() => {
        const allBrands = products.value.map(product => product.brand);
        return [...new Set(allBrands)].sort();
    });

    const priceRange = computed(() => {
        const prices = products.value.map(product => product.price);
        return {
            min: Math.min(...prices),
            max: Math.max(...prices)
        };
    });

    const ratingRange = computed(() => {
        const ratings = products.value.map(product => product.rating);
        return {
            min: Math.min(...ratings),
            max: Math.max(...ratings)
        };
    });

    const selectedSort = ref('default')
    const selectedBrands = ref([])
    const priceMin = ref(priceRange.min)
    const priceMax = ref(priceRange.max)
    const selectedRatings = ref(ratingRange.min)

    const emit = defineEmits(['filtersChanged'])

    watch([selectedSort, selectedBrands, priceMin, priceMax, selectedRatings], () => {
        emit('filtersChanged', {
            sort: selectedSort.value,
            brands: selectedBrands.value,
            price: { min: priceMin.value || null, max: priceMax.value || null },
            ratings: selectedRatings.value
        })
    })
</script>

<template>
    <div id="FilterBar" class="w-[210px] h-full bg-[#1E1E1E] flex flex-col items-center px-1 pb-2 gap-3 overflow-y-auto">
        <h2 class="sticky w-full py-3 text-center text-[20px] font-bold text-[#F5F5F5] top-0 bg-[#1E1E1E] border-b border-[#F5F5F5]">Filtro</h2>
        <fieldset class="w-full p-4 bg-[#252525] border border-[#333] rounded-lg">
            <legend class="font-semibold text-[#F5F5F5]">Ordenar por</legend>
            <div class="flex flex-col gap-2">
                <select name="order" id="order" v-model="selectedSort" class="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#333] rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#E55E00]">
                    <option value="default" class="text-[#F5F5F5]">Predeterminado</option>
                    <option value="price-asc" class="text-[#F5F5F5]">Precio: menor a mayor</option>
                    <option value="price-desc" class="text-[#F5F5F5]">Precio: mayor a menor</option>
                    <option value="rating-desc" class="text-[#F5F5F5]">Valoración: mejor valorados</option>
                    <option value="discount-desc" class="text-[#F5F5F5]">Descuento: mayor descuento</option>
                    <option value="name-asc" class="text-[#F5F5F5]">Nombre: A-Z</option>
                    <option value="name-desc" class="text-[#F5F5F5]">Nombre: Z-A</option>
                </select>
            </div>
        </fieldset>
        <fieldset class="w-full p-4 bg-[#252525] border border-[#333] rounded-lg">
            <legend class="font-semibold text-[#F5F5F5]">Marcas</legend>
            <div class="flex flex-col gap-2">
                <label v-for="brand in brands" :key="brand" class="flex items-center gap-2 cursor-pointer text-[#EAEAEA] hover:text-[#E55E00]">
                    <input type="checkbox" :value="brand" v-model="selectedBrands" class="sr-only peer" />
                    <span class="w-4 h-4 rounded border border-[#555] flex items-center justify-center peer-checked:bg-[#E55E00] peer-checked:border-[#E55E00]"></span>
                    <span>{{ brand }}</span>
                </label>
            </div>
        </fieldset>
        <fieldset class="w-full p-4 bg-[#252525] border border-[#333] rounded-lg">
            <legend class="font-semibold text-[#F5F5F5]">Precio</legend>
            <div class="flex gap-2">
                <input type="number" name="minPrice" id="minPrice" v-model.number="priceMin" placeholder="Min." class="w-1/2 px-2 py-1 rounded border border-[#333] bg-[#1E1E1E] text-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-[#E55E00]" />
                <input type="number" name="maxPrice" id="maxPrice" v-model.number="priceMax" placeholder="Max." class="w-1/2 px-2 py-1 rounded border border-[#333] bg-[#1E1E1E] text-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-[#E55E00]" />
            </div>
        </fieldset>
        <fieldset class="w-full p-4 bg-[#252525] border border-[#333] rounded-lg">
            <legend class="font-semibold text-[#F5F5F5]">Valoración</legend>
            <div class="flex justify-center gap-2">
                <button v-for="star in 5" :key="star" type="button" @click="selectedRatings = star" class="text-2xl transition-colors" :class="star <= selectedRatings ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-300'">
                    ★
                </button>
            </div>
        </fieldset>
    </div>
</template>

<style>
    #FilterBar::-webkit-scrollbar {
        width: 8px;
    }

    #FilterBar::-webkit-scrollbar-track {
        background: #1E1E1E;
    }

    #FilterBar::-webkit-scrollbar-thumb {
        background: #333333;
    }

    #FilterBar::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
</style>