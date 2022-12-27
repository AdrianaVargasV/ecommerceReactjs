import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <div className="container">
            <nav className='navbar'>
                <img src='./images/logo.png' alt='Home' style={{ width: 150 }} className='logo' />
                <div className='btn'>
                    <button>DAMAS</button>
                    <button>CABALLEROS</button>
                    <button>NIÑOS</button>
                    <button>ACCESORIOS</button>
                </div>
                <CartWidget/>
            </nav>
        </div>
    )
}
export default Navbar