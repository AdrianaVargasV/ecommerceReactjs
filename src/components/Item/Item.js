import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div>
            <div >
            <h3>{name}</h3>
            <img src={img} alt={name} style={{ width: 150 }} />
            <p>Precio: ${price}</p>
                <Link to={`/item/${id}`}><button>ver más</button></Link>
            </div>

        </div>
    )
}

export default Item