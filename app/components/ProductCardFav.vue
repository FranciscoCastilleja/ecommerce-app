<script setup>
    const props = defineProps({
        product: Object
    })

    function toSlug(name) {
        return name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
    }

    const removeFavorite = (productId) => {
        const favorites = useRemoveFavorite(productId)
    }

    const addCart = (productId) => {
        const cart = useAddCart(productId)
    }
</script>

<template>
    <div class="bg-[#1E1E1E] w-[350px] rounded-[12px] p-[15px] flex flex-col relative hover:translate-y-[-4px]">
        <img :src="props.product.thumbnail" :alt="props.product.title" class="w-full h-[180px] object-contain mb-4">
        <NuxtLink :to="`/products/${props.product.id}/${toSlug(props.product.title)}`" class="mb-[8px] font-bold text-[16px] text-[#F5F5F5] hover:text-[#FF6A00] cursor-pointer">{{ props.product.title }}</NuxtLink>
        <div class="text-[#B3B3B3]">
            <span v-for="star in 5" :key="star" class="text-2xl transition-colors" :class="star <= props.product.rating ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-300'">
                ★
            </span>
            ({{ props.product.rating }})
        </div>
        <div class="text-[18px] font-bold text-[#FF6A00]">${{ Math.round((props.product.price - (props.product.price * props.product.discountPercentage / 100)) * 100) / 100 }}</div>
        <div class="text-[14px] mb-[8px] text-[#B3B3B3]">{{ props.product.availabilityStatus }} ({{ props.product.stock }} en stock)</div>
        <div class="flex justify-between mt-auto gap-[8px]">
            <button class="flex-1 border-none rounded-[6px] p-[10px] cursor-pointer font-bold text-[#F5F5F5] bg-[#FF6A00] hover:bg-[#E55E00]" @click="addCart(props.product.id)">Agregar al carrito</button>
            <button class="flex-1 border-none rounded-[6px] p-[10px] cursor-pointer font-bold text-[#B3B3B3] bg-[#333333] hover:bg-[#2A2A2A]" @click="removeFavorite(props.product.id)">Eliminar</button>
        </div>
    </div>
</template>