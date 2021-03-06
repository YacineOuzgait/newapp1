import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expend-md navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Zoolando
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="toggle navigation" >
                    <span className="navbar-toggle-icon">...</span>    
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category">
                            Category
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gender">
                            Gender
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">
                            Product
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}
export default NavBar;