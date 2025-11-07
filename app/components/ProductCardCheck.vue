<script setup>
    const props = defineProps({
        product: Object
    })

    const priceWithDiscount = Math.round((props.product.price - (props.product.price * props.product.discountPercentage / 100)) * 100) / 100
</script>

<template>
    <div class="flex gap-[20px] border-b border-[#333333] pb-[20px] mb-[20px]">
        <img :src="product.thumbnail" :alt="product.title" class="size-[100px] object-cover rounded-lg">
        <div class="flex-1">
            <h2 class="text-lg m-0 text-[#F5F5F5]">{{ product.title }}</h2>
            <p class="my-[6px] mx-0 text-sm text-[#B3B3B3]">Precio: <strong>${{ priceWithDiscount }}</strong></p>
            <p class="my-[6px] mx-0 text-sm text-[#B3B3B3]">{{ product.availabilityStatus }}: {{ product.stock }} unidades</p>
        </div>
    </div>
</template>