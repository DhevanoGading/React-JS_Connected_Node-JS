import React from "react"
import { Link } from "react-router-dom"
class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg bg-light navbar-light">
                <a className="navbar-brand" href="#">
                    Bookstore
                </a>

                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse"
                    data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                Cart
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pegawai" className="nav-link">
                                Pegawai
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <br></br>
                </div>
            </div>
        )
    }
}
export default Navbar;