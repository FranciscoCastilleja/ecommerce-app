export function useGetCart() {
    const cart = useState('cart', () => {
        const cookie = useCookie('cart', {
            default: () => [] as any[]
        })
        return cookie.value || []
    })

    return { cart }
}