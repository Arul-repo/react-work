import React from "react";
import Demo from "./demo";


class ClassDemo extends React.Component{

    state = {
        title: "new title"
    }

    render(){
       return  <Demo title={this.state.title}></Demo>
    }
}

export default ClassDemo;