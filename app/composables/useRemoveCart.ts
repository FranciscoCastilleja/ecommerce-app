export async function useRemoveCart(productId: number) {
    const cart = useState('cart', () => {
        const cookie = useCookie('cart', {
            default: () => [] as any[]
        })
        return cookie.value || []
    })

    watch(cart, (val) => {
        const cookie: any = useCookie('cart')
        cookie.value = val
    }, { deep: true })

    cart.value = cart.value.filter(cartItem => cartItem.id !== productId)
}