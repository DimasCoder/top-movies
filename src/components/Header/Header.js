import React, {useState} from 'react'
import './Header.css'
import logo from '../../assets/ezgif.com-gif-maker-copia-1.gif'
import {Link} from "react-router-dom";

const Header = (props) => {

    const [search, setSearch] = useState('')

    const handleChange = (e) =>{
        setSearch(e.target.value);
        props.search(e.target.value);
    }
    return (
                <div className="header__inner">
                    <Link to={"/"}>
                        <img src={logo} alt="Logo"/>
                    </Link>
                    <div className="brand-container">
                        <h1>Top movies</h1>
                        <p>The best movies only on Top movies</p>
                    </div>
                    <div className="search-container">
                        <input className="input-search"
                               value={search}
                               onChange={handleChange}
                               type="text"
                               placeholder="Search...."/>
                    </div>
                </div>
    )
}
export default Header