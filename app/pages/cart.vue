<script setup>
    const { cart } = useGetCart()

    const cartItems = ref(cart.value.map((p, index) => ({ index, subtotal: p.minimumOrderQuantity * (Math.round((p.price - (p.price * p.discountPercentage / 100)) * 100) / 100) })))

    function updateQuantity({ index, subtotal }) {
        cartItems.value[index].subtotal = subtotal
        getSubtotal()
    }

    let subtotal = ref(Number(cartItems.value.reduce((suma, item) => suma + item.subtotal, 0).toFixed(2)));

    function getSubtotal() {
        subtotal.value = Number(cartItems.value.reduce((suma, item) => suma + item.subtotal, 0).toFixed(2));
    }

    const shippingCost = computed(() => {
        return subtotal.value > 2000 ? 0 : 5
    })

    const impRate = 0.16

    const imp = computed(() => Number((subtotal.value * impRate).toFixed(2)))

    const total = computed(() => (subtotal.value + shippingCost.value + imp.value).toFixed(2))

    function removeProduct({ index }) {
        cartItems.value.splice(index, 1) 
        getSubtotal()
    }
</script>

<template>
    <div id="CartContainer" class="flex flex-wrap w-[65%] my-[40px] mx-auto gap-[20px] p-[20px] h-[600px] overflow-y-auto">
        <div id="ProductsCartContainer" class="flex-2 w-full rounded-[12px] p-[20px] bg-[#1E1E1E] h-[550px] overflow-y-auto xl:w-auto">
            <ProductCardCart v-for="(product, index) in cart" :key="index" :index="index" :product="product" @updateQuantity="updateQuantity" @removeProduct="removeProduct" />
        </div>
        <div class="flex-1 h-fit rounded-[12px] p-[20px] bg-[#1E1E1E]">
            <h2 class="text-[18px] mb-[15px] text-[#F5F5F5]">Resumen del pedido</h2>
            <div class="flex justify-between my-[6px] text-[14px] text-[#B3B3B3]">
                <span>Subtotal:</span>
                <span>${{ subtotal }}</span>
            </div>
            <div class="flex justify-between my-[6px] text-[14px] text-[#B3B3B3]">
                <span>Envío estimado:</span>
                <span>${{ shippingCost }}</span>
            </div>
            <div class="flex justify-between my-[6px] text-[14px] text-[#B3B3B3]">
                <span>Impuestos:</span>
                <span>${{ imp }}</span>
            </div>
            <div class="font-bold text-[16px] text-[#F5F5F5] border-t border-[#333333] pt-[10px] mt-[10px]">
                <span>Total: </span>
                <span>${{ total }}</span>
            </div>
            <button class="w-full bg-[#FF6A00] text-[#F5F5F5] border-none p-[12px] rounded-lg cursor-pointer font-bold text-[15px] mt-[15px] hover:bg-[#E55E00]">Proceder a la compra</button>
        </div>
    </div>
</template>

<style>
    #ProductsCartContainer::-webkit-scrollbar,
    #CartContainer::-webkit-scrollbar {
        width: 8px;
    }

    #ProductsCartContainer::-webkit-scrollbar-track,
    #CartContainer::-webkit-scrollbar-track {
        background: transparent;
    }

    #ProductsCartContainer::-webkit-scrollbar-thumb,
    #CartContainer::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 8px;
    }

    #ProductsCartContainer::-webkit-scrollbar-thumb:hover,
    #CartContainer::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>