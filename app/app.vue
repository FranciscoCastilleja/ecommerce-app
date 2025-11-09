<template>
    <div class="h-screen bg-[#121212]">
        <HeaderBar/>
        <NuxtPage />
    </div>
</template>

<style>
    .page-enter-active,
    .page-leave-active {
        transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        transform: scale(0.8);
    }
</style>