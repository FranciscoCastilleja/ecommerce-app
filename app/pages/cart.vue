<template>
    <div class="flex flex-wrap w-[65%] my-[40px] mx-auto gap-[20px] p-[20px]">
        <div class="flex-2 rounded-[12px] p-[20px] bg-[#1E1E1E] h-[550px]">
            <div class="flex items-center border-b border-[#333333] gap-[20px] py-[15px] last:border-none">
                <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="Essence Mascara Lash Princess" class="size-[100px] object-cover rounded-[10px] bg-[#333333]">
                <div class="flex-2">
                    <h3 class="text-[18px] text-[#F5F5F5] mb-[6px]">Essence Mascara Lash Princess</h3>
                    <div class="text-[#FF6A00] font-bold mb-[8px]">$9.99 USD</div>
                    <div class="text-[13px] text-[#B3B3B3]">Stock disponible: <strong>99</strong> unidades</div>
                    <div class="text-[13px] text-[#B3B3B3]">Cantidad mínima: 48</div>
                </div>
                <div class="flex flex-col items-end gap-[8px]">
                    <div>
                        <input type="number" min="48" max="99" value="48" class="w-[60px] p-[5px] text-center border border-[#333333] rounded-[6px] focus:outline-none">
                    </div>
                    <div class="font-bold text-[#B3B3B3]">Subtotal: $479.52</div>
                    <button class="bg-none border-none text-[#d9534f] font-bold cursor-pointer text-[14px] hover:underline">Eliminar</button>
                </div>
            </div>
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