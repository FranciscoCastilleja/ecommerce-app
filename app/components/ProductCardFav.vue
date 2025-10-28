<template>
    <div class="bg-[#1E1E1E] w-[350px] rounded-[12px] p-[15px] flex flex-col relative hover:translate-y-[-4px]">
        <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="Essence Mascara" class="w-full h-[180px] object-contain mb-4">
        <NuxtLink :to="``" class="mb-[8px] font-bold text-[16px] text-[#F5F5F5] hover:text-[#FF6A00] cursor-pointer">Essence Mascara Lash Princess</NuxtLink>
        <div class="text-[#B3B3B3]">⭐️⭐️⭐️⭐️☆ (4.3)</div>
        <div class="text-[18px] font-bold text-[#FF6A00]">$9.99 USD</div>
        <div class="text-[14px] mb-[8px] text-[#B3B3B3]">Disponible (99 en stock)</div>
        <div class="flex justify-between mt-auto gap-[8px]">
            <button class="flex-1 border-none rounded-[6px] p-[10px] cursor-pointer font-bold text-[#F5F5F5] bg-[#FF6A00] hover:bg-[#E55E00]">Agregar al carrito</button>
            <button class="flex-1 border-none rounded-[6px] p-[10px] cursor-pointer font-bold text-[#B3B3B3] bg-[#333333] hover:bg-[#2A2A2A]">Eliminar</button>
        </div>
    </div>
</template>