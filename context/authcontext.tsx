import { createContext, useContext, useState } from "react";
import React from 'react';


type User = {
  username: string;
  token: string;
  id?: number;
};

type AuthContextType = {
  user: User | null;
  logIn: (userData: User) => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children}: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null); // can be User type or null

    function logIn(userData: User) {
        setUser(userData);
    }

    function logOut(){
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider")
    }
    
    return context;
}