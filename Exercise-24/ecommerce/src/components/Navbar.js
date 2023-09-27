import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <Link to="/" className="nav-link"> <span className="fa fa-home fa-lg"></span> Home </Link>
                {/* <a className="navbar-brand" href="home.html">Logo</a> */}
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            {/* <Link to="/" className="nav-link"> <span className="fa fa-home fa-lg"></span> Home </Link> */}
                            {/* <a className="nav-link" href="home.html">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/Products" className="nav-link"> <span className="fa fa-home fa-lg"></span> Products </Link>
                            {/* <a className="nav-link" href="products.html">Products</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/faq" className="nav-link"> <span className="fa fa-home fa-lg"></span> FAQ </Link>
                            {/* <a className="nav-link" href="faq.html">FAQ</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link"> <span className="fa fa-home fa-lg"></span> About Us </Link>
                            {/* <a className="nav-link" href="aboutus.html">About</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/contactus" className="nav-link"> <span className="fa fa-home fa-lg"></span> Contact Us </Link>
                            {/* <a className="nav-link" href="contactus.html">Contact</a> */}
                        </li>
                    </ul>
                    <ul className="navbar-nav me-0 mt-2 mt-lg-0">
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;