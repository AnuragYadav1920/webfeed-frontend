import React, { useEffect, useState, useRef} from "react";
import UserContext from "./UserContext.js";

export const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({
        value:false,
        message:'' 
    });
    const [openComponents, setOpenComponents] = useState([
        {
            id:"discover", isOpen:false
        },
        {
            id:"profile", isOpen:false
        },
        {
            id:"profileImage", isOpen:false
        },
        {
            id:"coverImage", isOpen:false
        },
    ])
    const closeAllComponents = () =>{
        setOpenComponents(openComponents.map(component=>({
            ...component,
            isOpen:false
          })))
    }
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
            <UserContext.Provider value={{user, setUser, loading, setLoading, notification, setNotification, openComponents, setOpenComponents, closeAllComponents, reloadUserDetails, isLoggedIn, setIsLoggedIn}}>
                {children }
            </UserContext.Provider>
    )
}

