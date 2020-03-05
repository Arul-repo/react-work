import React from 'react';
import './App.css';
import PersonView from "../components/Person/personView";
import CockPit from '../components/Cockpit/Cockpit';
import AuthContext from "../context/authContext";
import { BowserRouter } from "react-router-dom";
import ClassDemo from '../components/demo/DemoClass';
// import Functional from "./Functionstates";

class App extends React.Component {
	constructor(props){
		super(props);
		console.log('[app.js] constructor');
	}

	state = {
		title: "React Class Based Component",
		personDetails: [
			{'name': 'KarthikK', "age": 44, "type": 'Naughty Boy', 'id': '001'},
			{'name': 'Arul', "age": 24, "type": 'Good Boy', 'id': '004'},
			{'name': 'Sibin', "age": 62, "type": 'old Boy', 'id': '006'}
		],
		otherDetails: 'New States variables',
		showOthers: false,
		authentication: false
	}

	static getDerivedStateFromProps(props, state){
		console.log('[app.js] getderivedstatefromprops');
		return state;
	}
	componentDidMount(){
		console.log('[app.js] componentDidMount');
		document.title = "My Version Of React";
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('[app.js] shouldComponentUpdate');
		return true;
	}
	
	switchUserHandler = () => {
		this.setState({
			personDetails: [
				{'name': 'karthik', "age": 22, "type": ' Very Naughty Boy'},
				{'name': 'Arul', "age": 24, "type": 'Very Good Boy'},
				{'name': 'Shibin', "age": 21, "type": 'young Bad Boy'}
			],
			otherDetails: this.state.otherDetails
		});
	}

	nameChangeHandler = (events) =>{
		this.setState({
			personDetails: [
				{'name': 'karthik', "age": 22, "type": ' Very Naughty Boy'},
				{'name': events.target.value, "age": 24, "type": 'Very Good Boy'},
				{'name': 'Sinduja', "age": 12, "type": 'young Girl'}
			],
			otherDetails: this.state.otherDetails
		});
	}

  	onChangeHandler = (events, id) =>{
		const indexValue = this.state.personDetails.findIndex(p => {
			return p.id === id;
		});
		const getState = {...this.state.personDetails[indexValue]};
		getState.name = events.target.value;
		const stateAgain = [...this.state.personDetails];
		stateAgain[indexValue] = getState;
		this.setState({ personDetails: stateAgain });
	}

	toggleUserHandler = () =>{
		const currentView = this.state.showOthers;
		this.setState({
			showOthers: !currentView
		});
	}

	deleteUserHandler = (personIndex) =>{
		const updatedUser = [...this.state.personDetails];
		updatedUser.splice(personIndex, 1);
		this.setState({
			personDetails: updatedUser
		})
	}
	loginHandler = () =>{
		const status = this.state.authentication;
		this.setState({
			authentication: !status
		})
	}

	render() {
		console.log('[app.js] ParentRendering');
		let newVar = null;
		const button ={
			backgroundColor: "Red",
			color: "white",
			padding: "8px",
			cursor: "pointer",
			fontSize: "15px",
			fontFamily: "inherit",
			border: "1px solid",
		}
		
		if(this.state.showOthers){
			newVar =(
				<div className="toggleDiv">
					<PersonView 
						personDetails={this.state.personDetails} 
						clicked={this.deleteUserHandler} 
						changed={this.onChangeHandler} />
				</div>
			)
			button.backgroundColor = "Yellow";
		}
		return(
			<AuthContext.Provider value={{
				authentication: this.state.authentication,
				login: this.loginHandler
			}}> 
				<CockPit 
				title={this.state.title} 
				propTitle={this.props.propsClass}
				toggleUserHandler={this.toggleUserHandler} 
				newVar={newVar} button={button}
				></CockPit>
				<ClassDemo />
			</AuthContext.Provider>
		)
		//return React.createElement('div', {className: 'App', id:"hello"}, React.createElement('h1', null, 'React Application'));
	}
}

export default App;