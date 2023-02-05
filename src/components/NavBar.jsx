import React from 'react';
import '../App.css'
import CardWidget from './CardWidget';

const NavBar = () => {
    return(
        <div className='bloqueNav'> 
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categoria
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Motherboard</a></li>
                                <li><a className="dropdown-item" href="#">Procesadores</a></li>
                                <li><a className="dropdown-item" href="#">Placa de video</a></li>
                                <li><a className="dropdown-item" href="#">Memorias RAM</a></li>
                            </ul>
                        </li>
                    </ul>
                    </div>

                    {/*Componente CardWidget */}
                    
                    <CardWidget />
                </div>
            </nav>         
        </div>
    )
}

export default NavBar;