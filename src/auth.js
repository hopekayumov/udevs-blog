import React, {useEffect, useState} from "react";
import app from "./firebase-config"

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser)
    }, [])

    return (
        <AuthProvider
        value={{
            currentUser
        }}
        >
        { children }
        </AuthProvider>
    );
}