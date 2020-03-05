import React, { useState } from 'react';
import Person from "../components/Person/Person";

const functional = (props) => {
    const [ getPersonStates, setPersonStates ] = useState({
        personDetails: [
          {'name': 'Krishna', "age": 22, "type": ' Very Naughty Boy'},
          {'name': 'Arul', "age": 24, "type": 'Very Good Boy'},
          {'name': 'Shibin', "age": 12, "type": 'young Girl'}
        ],
        otherStates: 'some content goes here'
    });
    const switchUserHandler = () => {
        setPersonStates({
          personDetails: [
            {'name': 'karthikeyan', "age": 22, "type": ' Very Naughty Boy'},
            {'name': 'shibin', "age": 24, "type": 'Very Good Boy'},
            {'name': 'krishna', "age": 12, "type": 'young boy'}
          ],
          otherStates: getPersonStates.otherStates
        });
    }
    // console.log(getPersonStates);
    return(
        <div className="MainRootFunction">
            <h1>My React Function(Hook - React 16.8) Based Component</h1>
            <button onClick={switchUserHandler}>Switch User Details</button>
            <Person name={getPersonStates.personDetails[0].name} age={getPersonStates.personDetails[0].age}>{getPersonStates.personDetails[0].type}</Person>
            <Person name={getPersonStates.personDetails[1].name} age={getPersonStates.personDetails[1].age}>{getPersonStates.personDetails[1].type}</Person>
            <Person name={getPersonStates.personDetails[2].name} age={getPersonStates.personDetails[2].age}>{getPersonStates.personDetails[2].type}</Person>
            <Person click={switchUserHandler}>hello</Person>
	    </div>
    );
}
export default functional;