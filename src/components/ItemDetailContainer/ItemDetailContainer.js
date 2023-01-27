import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import { useState, useEffect } from "react";
<<<<<<< HEAD
import ItemDetail from "../ItemDetail/ItemDetail";
=======
>>>>>>> d265e81e84dec220732769e013fb111c8beda7f1

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId} = useParams()
    useEffect(()=> {
        getProductById(productId).then(product => {
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
    }, [productId])
    return (
        <div>
            <h2>Detalle del producto</h2>
<<<<<<< HEAD
            <ItemDetail {...product}/>
=======
            <h2>{product?.name}</h2>
>>>>>>> d265e81e84dec220732769e013fb111c8beda7f1
        </div>
    )
}
export default ItemDetailContainer;
