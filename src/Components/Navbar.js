import React from "react";
import { useHistory, Link } from 'react-router-dom'

class Navbar extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            updateSearchText: (e) =>{
                this.props.history.push(this.props.path)
                this.props.setSearchText(e.target.value)
            }
        }
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient p-3 shadow-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Movie Browser</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/">Action</Link></li>
                            <li><Link className="dropdown-item" to="/">Another action</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Coming Soon</Link>
                    </li>
                </ul>
                <form className="d-flex" action="/search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.props.searchText} onChange={this.state.updateSearchText}/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        )
    }
}

export default Navbar;