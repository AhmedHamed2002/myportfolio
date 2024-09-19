import React from 'react'; 
import { Link } from 'react-router-dom';
import '../Css/Navbar.css' ; 

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 border-bottom border-2 border-primary sticky-top">
            <div class="container">
                <Link to="/" class="navbar-brand"> <span className="logo"> Portfolio</span> </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mt-sm-4 mt-md-0 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/projects" class="nav-link">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/technologies" class="nav-link">Technologies</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/connect" class="nav-link">Connect Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
