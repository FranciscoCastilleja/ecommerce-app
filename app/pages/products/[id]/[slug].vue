<script setup>
    const route = useRoute()
    const id = route.params.id
    const slug = route.params.slug

    const { data } = await useFetch(`https://dummyjson.com/products/${id}`);
</script>

<template>
    <div class="flex w-full justify-center">
        <div id="ProductDataContainer" class="flex mt-1 mx-auto p-4 w-[80%] h-[630px] gap-8 flex-wrap overflow-y-auto flex-col lg:flex-row">
            <div class="flex flex-grow flex-shrink basis-[400px] flex-col gap-1">
                <img :src="data.images[0]" alt="" class="w-full object-cover border border-[#333] rounded-lg">
                <div class="flex w-full py-1 border border-[#333] rounded-lg justify-start items-center">
                    <span v-for="img in data.images" :key="img" class="ml-2">
                        <img :src="img" alt="" class="size-20 object-cover border border-[#333] rounded-lg cursor-pointer"/>
                    </span>
                </div>
            </div>
            <div class="flex flex-grow flex-shrink basis-[500px] flex-col gap-1">
                <h1 class="text-4xl text-[#F5F5F5]">{{ data.title }}</h1>
                <div class="text-[#B3B3B3] text-[15px]">Marca: {{ data.brand }} | Categoría: {{ data.category }}</div>
                <p class="text-[#B3B3B3] text-[15px] line-through">${{ data.price }}</p>
                <div class="text-3xl text-[#FF6A00] font-bold">
                    ${{ Math.round((data.price - (data.price * data.discountPercentage / 100)) * 100) / 100 }} <span class="text-base text-white bg-[#FF6A00] py-1 px-2 rounded-md ml-2">-{{ data.discountPercentage }}%</span>
                </div>
                <div class="flex items-center font-bold text-white">{{ data.availabilityStatus }}: <span class="ml-1 text-[#274B7B] text-[20px]">{{ data.stock }}</span></div>
                <div class="mt-4 text-[#F5F5F5]">{{ data.description }}</div>
                <div class="mt-2">
                    <span v-for="tag in data.tags" class="bg-[#333333] mr-2 py-1 px-2 rounded text-xs text-[#B3B3B3]">{{ tag }}</span>
                </div>
                <div class="flex mt-4 items-center gap-3">
                    <button class="bg-[#FF6A00] text-[#F5F5F5] border-none py-3 px-5 text-base rounded-md cursor-pointer w-fit hover:bg-[#E55E00]">Agregar al carrito</button>
                    <button class="flex size-[38px] cursor-pointer text-[#B3B3B3] border-none rounded-full justify-center items-center hover:bg-[#ff4d4d] hover:text-white" title="Agregar a favoritos">
                        <svg class="size-[20px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                                C13.09 3.81 14.76 3 16.5 3
                                19.58 3 22 5.42 22 8.5
                                c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                </div>
                <table class="mt-4 border-collapse w-full text-[#B3B3B3]">
                    <tr>
                        <th class="text-left p-2 border-b border-[#333333]">SKU</th>
                        <td class="text-left p-2 border-b border-[#333333]">{{ data.sku }}</td>
                    </tr>
                    <tr>
                        <th class="text-left p-2 border-b border-[#333333]">Peso</th>
                        <td class="text-left p-2 border-b border-[#333333]">{{ data.weight }} kg</td>
                    </tr>
                    <tr>
                        <th class="text-left p-2 border-b border-[#333333]">Dimensiones</th>
                        <td class="text-left p-2 border-b border-[#333333]">{{ data.dimensions.width }} x {{ data.dimensions.height }} x {{ data.dimensions.depth }}</td>
                    </tr>
                    <tr>
                        <th class="text-left p-2 border-b border-[#333333]">Garantía</th>
                        <td class="text-left p-2 border-b border-[#333333]">{{ data.warrantyInformation }}</td>
                    </tr>
                    <tr>
                        <th class="text-left p-2 border-b border-[#333333]">Envío</th>
                        <td class="text-left p-2 border-b border-[#333333]">{{ data.shippingInformation }}</td>
                    </tr>
                    <tr>
                        <th class="text-left p-2 border-b border-[#333333]">Política de devolución</th>
                        <td class="text-left p-2 border-b border-[#333333]">{{ data.returnPolicy }}</td>
                    </tr>
                    <tr>
                        <th class="text-left p-2 border-b border-[#333333]">Cantidad mínima</th>
                        <td class="text-left p-2 border-b border-[#333333]">{{ data.minimumOrderQuantity }}</td>
                    </tr>
                </table>
                <div class="mt-8">
                    <h3 class="text-[#F5F5F5]">Reseñas</h3>
                    <div class="flex justify-start gap-2">
                        <span v-for="star in 5" :key="star" class="text-2xl transition-colors" :class="star <= data.rating ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-300'">
                            ★
                        </span>
                    </div>
                    <div v-for="review in data.reviews" class="py-2 border-t border-[#333] text-[#B3B3B3]">
                        <div class="font-bold text-sm">Eleanor Collins {{ review.reviewerName }}</div>
                        <div class="text-sm">{{ review.reviewerEmail }}</div>
                        <div class="text-sm">{{ Date(review.date).toLocaleString() }}</div>
                        <div class="flex justify-start gap-2">
                            <span v-for="star in 5" :key="star" class="text-base transition-colors" :class="star <= review.rating ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-300'">
                                ★
                            </span>
                        </div>
                        <div class="text-sm my-1">Highly impressed! {{ review.comment }}</div>
                    </div>
                </div>
                <div class="flex gap-4 mt-4 text-[#B3B3B3]">
                    <div>
                        <strong>QR Code</strong><br>
                        <img :src="data.meta.qrCode" alt="QR Code" class="size-[100px] object-cover border border-[#333333] rounded-lg">
                    </div>
                    <div>
                        <strong>Barcode</strong><br>
                        {{ data.meta.barcode }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    #ProductDataContainer::-webkit-scrollbar {
        width: 8px;
    }

    #ProductDataContainer::-webkit-scrollbar-track {
        background: transparent;
    }

    #ProductDataContainer::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 8px;
    }

    #ProductDataContainer::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>