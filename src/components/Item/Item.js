import { Link } from "react-router-dom"

<<<<<<< HEAD
const Item = ({ id, name, img, price }) => {
=======
const Item = ({ name, img, price }) => {
>>>>>>> d265e81e84dec220732769e013fb111c8beda7f1
    return (
        <div>
            <div >
            <h3>{name}</h3>
            <img src={img} alt={name} style={{ width: 150 }} />
            <p>Precio: ${price}</p>
<<<<<<< HEAD
                <Link to={`/item/${id}`}><button>ver más</button></Link>
=======
                <Link to={'/item/${id}'}><button>ver más</button></Link>
>>>>>>> d265e81e84dec220732769e013fb111c8beda7f1
            </div>

        </div>
    )
}

export default Item