export function useGetCheckout() {
    const checkout = useState('checkout', () => {
        const cookie = useCookie('checkout', {
            default: () => [] as any[]
        })
        return cookie.value || []
    })

    return { checkout }
}