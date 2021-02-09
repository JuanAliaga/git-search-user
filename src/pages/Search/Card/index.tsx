import React from 'react';
import './styles.scss';
import { User } from '../../../core/components/utils/User';

type Props={
    userStats: User;
}

const Card = ({userStats}:Props) =>{
    return (
        <div className="card-container row">
            <div className="pic-container">
                <div>
                <img src={userStats.avatar_url} alt={userStats.login}className="img-style"/>
                </div>
                <a href={userStats.html_url} target="_blank">          
                    <button className="btn-style"> Ver perfil</button>
                </a>   
            </div>
            <div className="stats-container ">
                <div className="row">
                    <div className="sub-itens information-box">Repositórios públicos:{userStats.public_repos}</div>
                    <div className="sub-itens information-box">Seguidores:{userStats.followers}</div>
                    <div className="sub-itens information-box">Seguindo:{userStats.following}</div>
                </div>
                <div className="information-card information-box">
                    <h2 className="info-title">Informações</h2>
                    <div className="information-box info-itens info-content"><b>Empresa:</b>{userStats.company}</div>
                    <div className="information-box info-itens info-content"><b>Website/Blog:</b>{userStats.site}</div>
                    <div className="information-box info-itens info-content"><b>Localidade:</b>{userStats.location}</div>
                    <div className="information-box info-itens info-content"><b>Membro desde:</b>{userStats.created_at}</div>
                </div>
            </div>
            
        </div>
    )
    
}

export default Card;