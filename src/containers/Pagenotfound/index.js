import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import img1 from '../../images/404.gif'

const PagenotFound = () => {
    return (
        <div className='notfoundpage'>
        <img src={img1} />
            <div className='child'>
                <Link to="/" style={{ fontSize: "25px", color: "#fff", fontWeight: "400",marginLeft:"10px" }}>Go Home</Link>
            </div>
        </div>
    )
}

export default PagenotFound
