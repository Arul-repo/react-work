import React, { Fragment } from "react";
import Header from "../../components/snippets/header";
import AuthContext from "../../context/authContext";
import '../../containers/App.css';

const cockPit = (props) =>{
    console.log('[cockpit.js] rendering...');
    return (
        <Fragment>
            <header className="App-header">
                <h1>{props.title}</h1>
                <h3>{props.propTitle}</h3>
                <Header></Header>
            </header>
            <div className="container">
                <button style={props.button} onClick={props.toggleUserHandler}>Switch User Details</button>
                <AuthContext.Consumer>
                 {( context )=>{ return <button onClick={context.login} className="login">Login</button> }}
                </AuthContext.Consumer>
                <div className="userList">
                    {props.newVar}
                </div>
            </div>
        </Fragment>
    );
}

export default cockPit;