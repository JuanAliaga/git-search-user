import React from 'react';
import './styles.scss';

type Props = {
    title:string
}

const Button = ({title}:Props) => {
    return (
        <div className="button-container">
            <button className="btn-style active">{title}</button>
        </div>
        
    )
}

export default Button;