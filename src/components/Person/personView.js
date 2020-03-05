import React, { Component } from "react";
import Person from "./Person";

class PersonsView extends Component {
    constructor(props){
        super(props);
        console.log('[personView.js] constructor',props);
    }
    static getDerivedStatefromProps(props, state){
        console.log('[personView.js] getDerivedStatefromProps', state);
        return state;
    }
    shouldComponentUpdate(nextProps, nextState){
		console.log('[personView.js] shouldComponentUpdate');
		return true;
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[personView.js] getSnapshotBeforeUpdate');
        return {welcome: "message"};
    }
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log('[personView.js] componentDidUpdate', snapShot);
    }
    render(){
        
        return ( this.props.personDetails.map( ( persons, index ) =>{
            return ( <Person 
                name={persons.name} 
                age={persons.age} 
                key={persons.id} 
                clickEvent={() => this.props.clicked( index )} 
                changeEvent={(events) => this.props.changed( events, persons.id )}
                />
            );
        }));

    }
}

export default PersonsView;