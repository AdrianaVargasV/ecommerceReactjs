import Item from "../Item/Item"
const ItemList = ({ products }) => { 
    return (
        <div>
            {products.map(prod => <Item{...prod}/>)}
        </div>
    )
}

export default ItemList