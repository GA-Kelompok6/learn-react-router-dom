import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">
                <button>masuk ke login</button>  
            </Link>
            <Link to="/register">
                <button>masuk ke register</button>      
            </Link>
        </div>
    )
}
