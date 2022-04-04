import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <header>
        <div className="menu">
            <Link to="/">
                <img src="./img/logo1.png" alt="logo"/>
            </Link>
            <div className="menu-section">
                <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Passagens">Passagens</Link></li>
                        <li><Link to="/Pacotes">Pacotes</Link></li>
                        <li><Link to="/Contato">Contato</Link></li>
                        <li><Link to="/Admin">Admin</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}