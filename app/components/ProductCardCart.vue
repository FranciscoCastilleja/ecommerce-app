<script setup>
    const props = defineProps({
        product: Object,
        index: Number
    })

    const emit = defineEmits(['updateQuantity', 'removeProduct'])

    const removeCart = (productId) => {
        const cart = useRemoveCart(productId)
        emit('removeProduct', { index: props.index })
    }

    const quantity = ref(props.product.minimumOrderQuantity)

    const priceWithDiscount = Math.round((props.product.price - (props.product.price * props.product.discountPercentage / 100)) * 100) / 100

    let subtotal = Math.round((priceWithDiscount * quantity.value) * 100) / 100

    function quantityChange(event) {
        const newQuantity = Number(event.target.value)
        subtotal = Math.round((priceWithDiscount * quantity.value) * 100) / 100
        emit('updateQuantity', { index: props.index, subtotal: subtotal })
    }
</script>

<template>
    <div class="flex justify-between items-center border-b border-[#333333] gap-[20px] py-[15px] last:border-none">
        <img :src="props.product.thumbnail" :alt="props.product.title" class="size-[100px] object-cover rounded-[10px] bg-[#333333]">
        <div class="flex-2 min-w-[240px]">
            <h3 class="text-[18px] text-[#F5F5F5] mb-[6px]">{{ props.product.title }}</h3>
            <div class="text-[#FF6A00] font-bold mb-[8px]">${{ priceWithDiscount }}</div>
            <div class="text-[13px] text-[#B3B3B3]">{{ props.product.availabilityStatus }} ({{ props.product.stock }} en stock)</div>
            <div class="text-[13px] text-[#B3B3B3]">Cantidad mínima: {{ props.product.minimumOrderQuantity }}</div>
        </div>
        <div class="flex flex-col items-end gap-[8px]">
            <div>
                <input type="number" :min="props.product.minimumOrderQuantity" :max="props.product.stock" v-model.number="quantity" @input="quantityChange" class="w-[60px] p-[5px] text-center border border-[#333333] rounded-[6px] focus:outline-none">
            </div>
            <div class="font-bold text-[#B3B3B3]">Subtotal: ${{ subtotal }}</div>
            <button class="bg-none border-none text-[#d9534f] font-bold cursor-pointer text-[14px] hover:underline" @click="removeCart(props.product.id)">Eliminar</button>
        </div>
    </div>
</template>