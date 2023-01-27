const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
    return (
        <div>
            <h4>{name}</h4>
            <h6>Categoría: {category}</h6>
            <img src={img} alt={name} style={{ width: 250 }} />
            <p>Descripción: {description}</p>
            <p>Stock: {stock}</p>
            <p>Precio: ${price}</p>
        </div>
    )
}

export default ItemDetail