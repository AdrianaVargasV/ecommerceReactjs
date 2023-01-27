const products = [
    {
        id: '1',
        name: 'Traje de Baño Dama',
        price: 780,
        category: 'damas',
        img: '/Images/trajedama1.jpg',
        stock: 10,
        description: 'Traje de Baño Nike Swim'
    },
    {
        id: '2',
        name: 'Traje de Baño Caballero',
        price: 900,
        category: 'caballeros',
        img: '/Images/trajecaballero1.jpg',
        stock: 10,
        description: 'Traje de Baño Nike Vex Jammer'
    },
    {
        id: '3',
        name: 'Traje de Baño Niño',
        price: 350,
        category: 'niños',
        img: '/Images/trajeboy1.jpg',
        stock: 10,
        description: 'Traje de Baño Nike Volleyshort'
    },
    {
        id: '4',
        name: 'Gorro de Natación',
        price: 280,
        category: 'accesorios',
        img: '/Images/gorro.png',
        stock: 10,
        description: 'Gorro de Natación Arena Classic Unisex'
    },
    {
        id: '5',
        name: 'Goggles de Natación',
        price: 380,
        category: 'accesorios',
        img: '/Images/goggles.png',
        stock: 10,
        description: 'Goggles de Natación Arena Zoom-X Unisex'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}