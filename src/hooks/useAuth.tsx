

import { createContext, useContext } from 'react';

export interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

//Create a context for the authentification
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

//Custom hook to use the AuthContext
export const useAuth = (): AuthContextType=> {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}