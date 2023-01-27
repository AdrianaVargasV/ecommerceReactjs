import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import { useState, useEffect } from "react";

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
            <h2>{product?.name}</h2>
        </div>
    )
}
export default ItemDetailContainer;
