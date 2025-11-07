export async function useAddCheckout(cart: Object, subtotal: Number, shippingCost: Number, imp: Number, total: Number) {
    const cookie = useCookie('checkout', {
        default: () => [] as any[],
        sameSite: 'lax',
    })

    const checkout = useState('checkout', () => cookie.value || [])

    watch(checkout, (val) => {
        cookie.value = val
    }, { deep: true })

    try {
        if (checkout.value.length > 0) {
            checkout.value = []
            cookie.value = []
        }

        checkout.value.push({
            products: cart,
            subtotal,
            shipphing: shippingCost,
            imp,
            total
        })
    } catch (error) {
        console.error('Error al proceder a la compra: ', error);
        return []
    }

    return checkout
}
