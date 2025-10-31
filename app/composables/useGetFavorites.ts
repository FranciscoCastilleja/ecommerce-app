export function useGetFavorites() {
    const favorites = useState('favorites', () => {
        const cookie = useCookie('favorites', {
            default: () => [] as any[]
        })
        return cookie.value || []
    })

    return { favorites }
}