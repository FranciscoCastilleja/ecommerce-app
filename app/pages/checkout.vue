<template>
    <div class="grid place-items-center">
        <div class="w-[1000px] my-[10px] mx-auto bg-[#1E1E1E] rounded-lg overflow-hidden">
            <header class="py-[15px] px-[30px] border-b border-[#333333] flex justify-between items-center text-[#B3B3B3]">
                <h1 class="text-2xl m-0">Checkout</h1>
            </header>
            <main class="flex flex-wrap px-[30px] py-[25px] gap-[40px] flex-col lg:flex-row">
                <section class="flex-grow flex-shrink basis-[55%]">
                    <div class="flex gap-[20px] border-b border-[#333333] pb-[20px] mb-[20px]">
                        <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="Essence Mascara Lash Princess" class="size-[100px] object-cover rounded-lg">
                        <div class="flex-1">
                            <h2 class="text-lg m-0 text-[#F5F5F5]">Essence Mascara Lash Princess</h2>
                            <p class="my-[6px] mx-0 text-sm text-[#B3B3B3]">Precio: <strong>$9.99 USD</strong></p>
                            <p class="my-[6px] mx-0 text-sm text-[#B3B3B3]">Stock disponible: 99 unidades</p>
                            <div class="mt-[10px] flex items-center gap-[10px]">
                                <label for="qty" class="text-[#B3B3B3]">Cantidad:</label>
                                <input type="number" id="qty" min="1" max="99" value="2" class="w-[60px] p-[5px] border border-[#333333] rounded-[6px] text-center">
                            </div>
                        </div>
                    </div>
                    <div class="mt-[25px] bg-[#1E1E1E] p-[20px] rounded-lg">
                        <h4 class="mb-[10px] text-[#F5F5F5]">Información de Envío</h4>
                        <p class="text-sm text-[#B3B3B3] my-[4px] mx-0">Ships in 3-5 business days</p>
                        <h4 class="mb-[10px] text-[#F5F5F5]">Política de Devolución</h4>
                        <p class="text-sm text-[#B3B3B3] my-[4px] mx-0">No return policy</p>
                    </div>
                </section>
                <aside class="flex-grow flex-shrink basis-[35%] bg-[#121212] p-[20px] rounded-lg">
                    <h3 class="mb-[15px] text-lg text-[#F5F5F5]">Resumen de la Orden</h3>
                    <div class="flex justify-between mb-[8px] text-[#B3B3B3]">
                        <span>Subtotal</span>
                        <span>$19.98</span>
                    </div>
                    <div class="flex justify-between mb-[8px] text-[#B3B3B3]">
                        <span>Envío</span>
                        <span>$5.00</span>
                    </div>
                    <div class="flex justify-between mb-[8px] text-[#B3B3B3]">
                        <span>Impuestos</span>
                        <span>$2.00</span>
                    </div>
                    <div class="border-t border-[#333333] mt-[15px] pt-[15px] flex justify-between font-bold text-[#F5F5F5]">
                        <span>Total</span>
                        <span>$26.98</span>
                    </div>
                    <div class="mt-[25px] bg-[#1E1E1E] p-[20px] rounded-lg">
                        <h4 class="mb-[10px] text-[#F5F5F5]">Dirección de Envío</h4>
                        <p class="text-sm text-[#B3B3B3] my-[4px] mx-0">Francisco Castilleja</p>
                        <p class="text-sm text-[#B3B3B3] my-[4px] mx-0">Calle Ficticia 123, Monterrey, MX</p>
                        <h4 class="mb-[10px] text-[#F5F5F5]">Método de Pago</h4>
                        <p class="text-sm text-[#B3B3B3] my-[4px] mx-0">Tarjeta Visa terminada en •••• 4452</p>
                    </div>
                    <button class="block w-full mt-[25px] bg-[#FF6A00] text-[#F5F5F5] text-center border-none p-[15px] rounded-lg cursor-pointer text-base font-semibold hover:bg-[#E55E00]">Confirmar y Pagar</button>
                </aside>
            </main>
        </div>
    </div>
</template>