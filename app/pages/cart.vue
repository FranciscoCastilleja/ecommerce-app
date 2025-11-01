<script setup>
    const { cart } = useGetCart()
</script>

<template>
    <div class="flex flex-wrap w-[65%] my-[40px] mx-auto gap-[20px] p-[20px]">
        <div id="ProductsCartContainer" class="flex-2 rounded-[12px] p-[20px] bg-[#1E1E1E] h-[550px] overflow-y-auto">
            <ProductCardCart v-for="(product, index) in cart" :key="index" :product="product"/>
        </div>
        <div class="flex-1 h-fit rounded-[12px] p-[20px] bg-[#1E1E1E]">
            <h2 class="text-[18px] mb-[15px] text-[#F5F5F5]">Resumen del pedido</h2>
            <div class="flex justify-between my-[6px] text-[14px] text-[#B3B3B3]">
                <span>Subtotal:</span>
                <span>$479.52</span>
            </div>
            <div class="flex justify-between my-[6px] text-[14px] text-[#B3B3B3]">
                <span>Envío estimado:</span>
                <span>$5.00</span>
            </div>
            <div class="flex justify-between my-[6px] text-[14px] text-[#B3B3B3]">
                <span>Impuestos:</span>
                <span>$7.20</span>
            </div>
            <div class="font-bold text-[16px] text-[#F5F5F5] border-t border-[#333333] pt-[10px] mt-[10px]">
                <span>Total: </span>
                <span>$491.72</span>
            </div>
            <button class="w-full bg-[#FF6A00] text-[#F5F5F5] border-none p-[12px] rounded-lg cursor-pointer font-bold text-[15px] mt-[15px] hover:bg-[#E55E00]">Proceder a la compra</button>
        </div>
    </div>
</template>

<style>
    #ProductsCartContainer::-webkit-scrollbar {
        width: 8px;
    }

    #ProductsCartContainer::-webkit-scrollbar-track {
        background: transparent;
    }

    #ProductsCartContainer::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 8px;
    }

    #ProductsCartContainer::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>