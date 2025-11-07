<script setup>
    const { checkout } = useGetCheckout()

    function pay() {
        location.href = '/'
    }
</script>

<template>
    <div class="grid place-items-center">
        <div class="w-[1000px] my-[10px] mx-auto bg-[#1E1E1E] rounded-lg overflow-hidden">
            <header class="py-[15px] px-[30px] border-b border-[#333333] flex justify-between items-center text-[#B3B3B3]">
                <h1 class="text-2xl m-0">Checkout</h1>
            </header>
            <main class="flex flex-wrap px-[30px] py-[25px] gap-[40px] flex-col lg:flex-row">
                <section id="ProductsCheckoutContainer" class="flex-grow flex-shrink basis-[55%] h-[510px] overflow-y-auto">
                    <ProductCardCheck v-for="(product, index) in checkout[0].products" :key="index" :product="product" />
                </section>
                <aside class="flex-grow flex-shrink basis-[35%] bg-[#121212] p-[20px] rounded-lg">
                    <h3 class="mb-[15px] text-lg text-[#F5F5F5]">Resumen de la Orden</h3>
                    <div class="flex justify-between mb-[8px] text-[#B3B3B3]">
                        <span>Subtotal</span>
                        <span>${{ checkout[0].subtotal }}</span>
                    </div>
                    <div class="flex justify-between mb-[8px] text-[#B3B3B3]">
                        <span>Envío</span>
                        <span>${{ checkout[0].shipphing }}</span>
                    </div>
                    <div class="flex justify-between mb-[8px] text-[#B3B3B3]">
                        <span>Impuestos</span>
                        <span>${{ checkout[0].imp }}</span>
                    </div>
                    <div class="border-t border-[#333333] mt-[15px] pt-[15px] flex justify-between font-bold text-[#F5F5F5]">
                        <span>Total</span>
                        <span>${{ checkout[0].total }}</span>
                    </div>
                    <div class="mt-[25px] bg-[#1E1E1E] p-[20px] rounded-lg">
                        <h4 class="mb-[10px] text-[#F5F5F5]">Dirección de Envío</h4>
                        <p class="text-sm text-[#B3B3B3] my-[4px] mx-0">Nombre Completo</p>
                        <p class="text-sm text-[#B3B3B3] my-[4px] mx-0">Calle, Colonia, C.P, Ciudad, Estado, País</p>
                        <h4 class="mb-[10px] text-[#F5F5F5]">Método de Pago</h4>
                        <p class="text-sm text-[#B3B3B3] my-[4px] mx-0">Tarjeta [] terminada en •••• []</p>
                    </div>
                    <button class="block w-full mt-[25px] bg-[#FF6A00] text-[#F5F5F5] text-center border-none p-[15px] rounded-lg cursor-pointer text-base font-semibold hover:bg-[#E55E00]" @click="pay">Confirmar y Pagar</button>
                </aside>
            </main>
        </div>
    </div>
</template>

<style>
    #ProductsCheckoutContainer::-webkit-scrollbar {
        width: 8px;
    }

    #ProductsCheckoutContainer::-webkit-scrollbar-track {
        background: transparent;
    }

    #ProductsCheckoutContainer::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 8px;
    }

    #ProductsCheckoutContainer::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>