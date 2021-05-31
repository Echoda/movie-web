import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {
    return (
        <div>
            <h1>home 首页</h1>
            <Link to="/admin">to admin</Link>
        </div>
    )
}
