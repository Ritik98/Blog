import React from 'react';
import { useState } from 'react';
export const AuthContext = React.createContext({
    token : "",
    isLoggedIn : false,
    data : [],
    logIn : (token) => {},
    logOut : () => {},
    dataHandler : (details) => {}
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [data,setData] = useState([]);
    const [token , setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;
    const logInHandler = (token) => {
        setToken(token);
        localStorage.setItem('token' , token);
    };
    const logOutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        
    };
    const dataHandler = (data) => {
        setData(data);
    };
    const contextValue = {
        token : token,
        isLoggedIn:userIsLoggedIn,
        data : data,
        logIn:logInHandler,
        logOut:logOutHandler,
        dataHandler:dataHandler
    }
    return <AuthContext.Provider value = {contextValue}>{props.children}</AuthContext.Provider>
};
export default AuthContext;