const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient p-3">
        <div className="container-fluid">
            <a className="navbar-brand" href="gotosomewhereelse">Movie Browser</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="gotosomewhereelse">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="gotosomewhereelse">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="gotosomewhereelse " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="gotosomewhereelse">Action</a></li>
                        <li><a className="dropdown-item" href="gotosomewhereelse">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="gotosomewhereelse">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="gotosomewhereelse" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;