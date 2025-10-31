export async function useAddFavorite(productId: number) {
    const cookie = useCookie('favorites', {
        default: () => [] as any[],
        sameSite: 'lax',
    })

    const favorites = useState('favorites', () => cookie.value || [])

    watch(favorites, (val) => {
        cookie.value = val
    }, { deep: true })

    try {
        const data = await useFetch(`https://dummyjson.com/products/${productId}`)

        const product: any = data.data.value

        if (!favorites.value.some((fav: any) => fav.id === productId)) {
            favorites.value.push({
                id: product.id,
                thumbnail: product.thumbnail,
                title: product.title,
                rating: product.rating,
                price: product.price,
                discountPercentage: product.discountPercentage,
                availabilityStatus: product.availabilityStatus,
                stock: product.stock
            })
            return true
        } else {
            favorites.value = favorites.value.filter(fav => fav.id !== productId)
        }
    } catch (error) {
        console.error('Error al agregar a favoritos: ', error);
        return []
    }

    return favorites
}