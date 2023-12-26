const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-3 pe-3">
            <a className="navbar-brand" href="/home">ethanbunce.com</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/apps">Apps</a>
                    </li>
                </ul>
            </div>
        </nav>
    );

}

export default Navbar;