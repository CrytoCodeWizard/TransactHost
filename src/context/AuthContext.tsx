import React, { createContext, useContext, useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import {
    decodeToken,
    isTokenValid,
    refreshToken,
    TokenPayload,
    login,
    logout
} from "@/api/authService";

interface AuthContextType {
    user: TokenPayload | null;
    accessToken: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<TokenPayload | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('accessToken');
            if (token && isTokenValid(token)) {
                const decodedUser = decodeToken(token);
                if (decodedUser) {
                    setUser(decodedUser);
                    setAccessToken(token);
                }
            } else {
                const refreshed = await refreshToken();
                if (refreshed) {
                    const decodedUser = decodeToken(refreshed.accessToken);
                    setUser(decodedUser);
                    setAccessToken(refreshed.accessToken);
                }
            }
        };
        checkAuth();
    }, []);

    const handleLogin = async (email: string, password: string) => {
        const response = await login({ userName: email, password: password });
        if (!response.error) {
            const decodedUser = decodeToken(response.accessToken);
            setUser(decodedUser);
            setAccessToken(response.accessToken);
        }
    }

    const handleLogout = () => {
        logout();
        setUser(null);
        setAccessToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, accessToken, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
