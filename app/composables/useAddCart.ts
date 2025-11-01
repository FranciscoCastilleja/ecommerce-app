export async function useAddCart(productId: number) {
    const cookie = useCookie('cart', {
        default: () => [] as any[],
        sameSite: 'lax',
    })

    const cart = useState('cart', () => cookie.value || [])

    watch(cart, (val) => {
        cookie.value = val
    }, { deep: true })

    try {
        const data = await useFetch(`https://dummyjson.com/products/${productId}`)

        const product: any = data.data.value

        if (!cart.value.some((cartItem: any) => cartItem.id === productId)) {
            cart.value.push({
                id: product.id,
                thumbnail: product.thumbnail,
                title: product.title,
                price: product.price,
                discountPercentage: product.discountPercentage,
                availabilityStatus: product.availabilityStatus,
                stock: product.stock,
                minimumOrderQuantity: product.minimumOrderQuantity
            })
            return true
        } else {
            cart.value = cart.value.filter((cartItem: any) => cartItem.id !== productId)
        }
    } catch (error) {
        console.error('Error al agregar al carrito: ', error);
        return []
    }

    return cart
}