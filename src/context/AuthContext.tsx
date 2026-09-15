
import React, { useState, type ReactNode } from 'react';
import { AuthContext } from '../hooks/useAuth';

interface AuthProviderProps {
    children: ReactNode;
}


//Create a provider component for the auth context
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    //Function to update the auth state
    const login = () => setIsAuthenticated(true);
    
    const logout = () => setIsAuthenticated(false);

    //Provide the auth and updated value 
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};