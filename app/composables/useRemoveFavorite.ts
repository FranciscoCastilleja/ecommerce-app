export async function useRemoveFavorite(productId: number) {
    const favorites = useState('favorites', () => {
        const cookie = useCookie('favorites', {
            default: () => [] as any[]
        })
        return cookie.value || []
    })

    watch(favorites, (val) => {
        const cookie: any = useCookie('favorites')
        cookie.value = val
    }, { deep: true })

    favorites.value = favorites.value.filter(fav => fav.id !== productId)
}