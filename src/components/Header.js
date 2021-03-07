import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello, I am Rad</h1>
                <Typed
                    className="typed-text"
                    strings={["Cloud Engineer", "Data Engineer", "AWS Solution Architect", "Web Designer"]}
                    typeSpeed = {40}
                    backSpeed = {60}
                    loop = {true}
                />
            </div>
        </div>
    )
}

export default Header
