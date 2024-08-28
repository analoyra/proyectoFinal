import '../../components/layout/Header.css';
import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="\images\home\logo.jpg" width="100" alt=" Punto Z"/>
                <h1> Impresiones 3D</h1>
                <h2> PUNTO Z</h2>
            </div>
        </header>
    );

    
}

export default Header;