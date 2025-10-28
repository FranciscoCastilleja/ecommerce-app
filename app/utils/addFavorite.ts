export const addFavorite = async (productId: any) => {
    try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`)
        if (!res.ok) {
            throw new Error('Error al obtener el producto')
        }
        const data = await res.json();
        const favorite = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (!favorite.find((fav: any) => fav.id === productId)) {
            favorite.push({
                id: data.id,
                thumbnail: data.thumbnail,
                title: data.title,
                rating: data.rating,
                price: data.price,
                availabilityStatus: data.availabilityStatus,
                stock: data.stock
            })
            localStorage.setItem('favorites', JSON.stringify(favorite))
            return true
        } else {
            console.log('Producto ya está en favoritos.');
        }
    } catch (error) {
        console.error('Error al agregar a favoritos: ', error);
        return []
    }
}