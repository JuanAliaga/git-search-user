import React, { useEffect, useState } from 'react';
import { makeRequest } from '../../core/components/utils/Request';
import {User} from '../../core/components/utils/User'
import Card from './Card';
import ImgLoader from './CardLoader/ImgLoader';
import InfoLoader from './CardLoader/InfoLoader';


import './styles.scss'

const Search = () => {
    const [render,setRender] = useState(1);
    const [user,setUser] = useState<User>({
        id:0,
        login:"string",
        followers:0,
        public_repos: 0,
        following:0,
        avatar_url:"",
        created_at:'',
        location:'',
        site:'',
        company:'',
        html_url:'',
    });

    useEffect(()=>{
        
    })
    const [login,setLogin] = useState('');


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        setLogin(event.target.value);
    }
    


    const handleClick = () =>{
            setRender(2);
            makeRequest({url:`/users/${login}`})
            .then(response => setUser(response.data))
            .finally(() => setRender(3));
        
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
            {render == 1 ? <></>:(
                render==2 ? 
                <div className="row card-container">
                    <ImgLoader/>
                    <InfoLoader/>
                </div>:(
                    <Card userStats={user}/>)
                )
            }                
         
        </div>
       </> 
    )
}

export default Search;