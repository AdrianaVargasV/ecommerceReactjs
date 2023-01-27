import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="container">
            <nav className='navbar'>
                <img src='./images/logo.png' alt='Home' style={{ width: 150 }} className='logo' />
                <div className='btn'>
                <Link to='/category/damas'><button>Damas</button></Link>
                    <Link to='/category/caballeros'><button>Caballeros</button></Link>
                    <Link to='/category/niños'><button>Niños</button></Link>
                    <Link to='/category/accesorios'><button>Accesorios</button></Link>
                    <Link to='/'><button>Todo</button></Link>
                </div>
                <CartWidget/>
            </nav>
        </div>
    )
}
export default Navbar