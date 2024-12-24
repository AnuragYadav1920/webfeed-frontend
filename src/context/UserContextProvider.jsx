import React, { useEffect, useState, useRef} from "react";
import UserContext from "./UserContext.js";

export const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const reloadUserDetails = () =>{
        const userString = localStorage.getItem('user');
        const dataRetrieved = JSON.parse(userString);
        setUser(dataRetrieved);
        if(userString){
            setIsLoggedIn(true)
        }
    };

    useEffect(()=>{
        reloadUserDetails();
    },[]);
    return(
            <UserContext.Provider value={{user, setUser, loading, setLoading, reloadUserDetails, isLoggedIn, setIsLoggedIn}}>
                {children }
            </UserContext.Provider>
    )
}

