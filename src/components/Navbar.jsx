import React from "react";

export default function Navbar(props){
    console.log(props)
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">React List</a>
            </div>
        </nav>
    )
}