<script setup>
    const props = defineProps({
        cat: String
    })

    const { data } = await useFetch(`https://dummyjson.com/products/category/${props.cat}`);

    function toSlug(name) {
        return name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
    }

    const addFavorite = (productId) => {
        const favorites = useAddFavorite(productId)
    }

    const { favorites } = useGetFavorites()

    const addCart = (productId) => {
        const cart = useAddCart(productId)
    }
</script>

<template>
    <div v-for="product in data.products" class="group grid relative w-[280px] flex-shrink-0 border border-[#333333] place-items-center rounded-lg">
        <div class="relative w-[230px] overflow-hidden">
            <img :src="product.thumbnail" alt="Producto" class="size-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" />
            <button class="flex absolute size-[38px] cursor-pointer text-[#B3B3B3] top-[10px] right-[10px] border-none rounded-full justify-center items-center hover:bg-[#ff4d4d] hover:text-white" :class="favorites.some((fav) => fav.id === product.id) ? 'text-[#ff4d4d]' : 'text-[#B3B3B3]'" title="Agregar a favoritos" @click="addFavorite(product.id)">
                <svg class="size-[20px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                        2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                        C13.09 3.81 14.76 3 16.5 3
                        19.58 3 22 5.42 22 8.5
                        c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </button>
        </div>
        <div class="p-[16px]">
            <p class="mb-[4px] text-[12px] uppercase text-[#B3B3B3]">{{ product.brand }}</p>
            <NuxtLink :to="`/products/${product.id}/${toSlug(product.title)}`" class="mb-[8px] font-bold text-[16px] text-[#F5F5F5] hover:text-[#FF6A00] cursor-pointer">{{ product.title }}</NuxtLink>
            <div class="flex items-center gap-8 mb-[8px]">
                <span class="text-[18px] font-bold text-[#274B7B]">${{ Math.round((product.price - (product.price * product.discountPercentage / 100)) * 100) / 100 }}</span>
                <span class="line-through text-[14px] text-[#B3B3B3]">${{ product.price }}</span>
                <span class="text-green-700 text-[13px] font-base">-{{ product.discountPercentage }}%</span>
            </div>
            <div class="flex text-[#f5b301] items-center text-[14px] mb-[12px]">
                <svg class="mr-[4px] size-[16px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.429 8.2 1.193-5.934 5.784
                    1.402 8.174L12 18.896l-7.336 3.871
                    1.402-8.174L.132 9.209l8.2-1.193z"/>
                </svg>
                <span>{{ product.rating }}</span>
            </div>
            <button class="w-full p-[10px] bg-[#FF6A00] border-none rounded-[10px] text-[#F5F5F5] font-base cursor-pointer hover:bg-[#E55E00]" @click="addCart(product.id)">Agregar al carrito</button>
        </div>
    </div>
</template>