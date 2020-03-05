import React, { Component } from "react";
import { BrowserRouter, Route, /* Link, */ NavLink/* , Redirect */ } from "react-router-dom";

/* Own Component */
const footer = () =>{
    return (<h1>This is about page</h1>);
}

const user = ({match}) =>{
    return (<h1>Welcome User Mr.{match.params.username}</h1>);
}

class Header extends Component{
    render(){
        return(
            <BrowserRouter>
            <Route path="/header" extact strict render={ () => { return <p>hello Header</p> }}/>
            <Route path="/footer" extact strict component={footer} />
            <Route path="/user/:username" extact strict component={user} />
            <ul>
                <li><NavLink to="/" activeClassName="active" strict exact>Home</NavLink></li>
                <li><NavLink to="/header"  activeClassName="active" strict exact>About</NavLink></li>
                <li><NavLink to="/footer"  activeClassName="active" strict exact>Contact</NavLink></li>
                <li><NavLink to="/user/arul"  activeClassName="active" strict exact>Policy</NavLink></li>
            </ul>
            </BrowserRouter>
        )
    }
}

export default Header;
