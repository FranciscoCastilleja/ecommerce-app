<template>
    <header class="flex h-[100px] bg-[#1E1E1E] border-b border-[#F5F5F5] items-center justify-around">
        <NuxtLink href="/">
            <h1 class="text-[#F5F5F5] text-2xl font-bold">E-commerce App</h1>
        </NuxtLink>
        <input type="search" name="" id="" class="flex pl-[10px] w-[550px] h-[30px] rounded-md focus:outline-none" placeholder="Encuentra lo que buscas">
        <NuxtLink href="/favorite" class="flex text-[#B3B3B3] size-[50px] justify-center items-center border border-[#F5F5F5] rounded-md hover:border-[#E55E00] hover:text-[#E55E00]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
        </NuxtLink>
        <NuxtLink href="/cart" class="flex text-[#B3B3B3] size-[50px] justify-center items-center border border-[#F5F5F5] rounded-md hover:border-[#E55E00] hover:text-[#E55E00]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
        </NuxtLink>
    </header>
</template>