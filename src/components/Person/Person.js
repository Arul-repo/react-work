import React, {Component /* Fragment */} from "react";
import "./Person.css";
import Aux from "../../hoc/Auxiiliary";
import AuthContext from "../../context/authContext";

class Persons extends Component{
    render(){
        return (
            <div>
                <AuthContext.Consumer>
                    {( context ) => { 
                        /* return context.authentication ? <p>LogOut</p> : <p>LogIn</p> */
                        if(context.authentication){
                            return(
                            <Aux>
                                <p>LogOut</p>
                                    <p onClick={this.props.clickEvent}>Hello! This is {this.props.name} from accenture <strong>{this.props.age}</strong> old</p>
                                    <div onClick={this.props.click}>{this.props.children}</div>
                                    <input type="text" name="name" onChange={this.props.changeEvent} />
                            </Aux>
                            )
                        }else{
                            return <p>LogIn</p>;
                        }
                    }}
                </AuthContext.Consumer>
                
            </div>
        )

    }   
}

export default Persons;