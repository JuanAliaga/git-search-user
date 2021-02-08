import React, { useEffect, useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/components/utils/Request';
import {User} from '../../core/components/utils/User'

import './styles.scss'

const Search = () => {
    const [user,setUser] = useState<User>();
    const [login,setLogin] = useState('');


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        setLogin(event.target.value);
    }

    const handleClick = () =>{
            
            makeRequest({url:`/users/${login}`})
            .then(response => setUser(response.data));
        
    }
        
    
    return (
       <>
        <div className="search-container">
            <div>
                <h1>
                    Encontre um perfil Github 
                </h1>
            </div>
            <div className="input-container">
                <input value={login} placeholder="Usuario Github" className="input-style" onChange={handleOnChange}></input>
            </div>
            <div className="btn-container">              
                <button className="btn-style" onClick={handleClick}>Encontre</button>
            </div>
        </div>
        <div>
            Seguidores:{user?.followers}
        </div>
       </> 
    )
}

export default Search;