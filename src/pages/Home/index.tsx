import React from 'react';
import Button from '../../core/components/Button';
import './styles.scss';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="home-container">
            <div className=" title-container">
                <h1 className= "title-content">Desafio do Capitlo 3,<br/> Bootcamp DevSuperior</h1>
            </div>
            <div className = "text-container">
                <p className ="text-content">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/><br/>
                    Favor observar as instruções passadas no capítulo sobre a elaboração<br/> deste projeto.<br/><br/>
                    Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span className="blue-text">antforfigma@gmail.com</span></p>
            </div>
            <div className="mg-btn">
                <Link to="/search">
                <Button title="Começar"/>
                </Link>
            </div>
            
        </div>
    )
}

export default Home;