import React from "react";

const Authentication = React.createContext({
    Auth: false,
    login: (props) =>{
        return props;
    }
})

export default Authentication;