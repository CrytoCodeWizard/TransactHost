import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const authBaseUrl = process.env.BASE_API_URL + 'auth';

// Define types for login credentials and response
export interface LoginCredentials {
    userName: string;
    password: string;
}

export interface userDataSchema {
    name: string,
    country: string,
    postalCode: string,
    city: string,
    address: string,
    taxNumber: string,
    user: [
        {
            firstName: string,
            lastName: string,
            email: string,
            password: string,
        }
    ],
    euTaxNumber: string,
}

interface LoginResponseInfo {
    error: boolean;
    message: string;
    accessToken: string;
    refreshToken: string;
}

interface RegisterResponseInfo {
    error: boolean;
    message: string;
    newId: string;
}

interface LoginResponse {
    responseInfo: LoginResponseInfo;
}

interface RegisterResponse {
    responseInfo: RegisterResponseInfo;
}

interface RefreshTokenResponse {
    responseInfo: LoginResponseInfo;
}

export interface TokenPayload {
    userId: string;
    companyId: string;
    firstName: string;
    lastName: string;
    roles: string[];
    isActive: boolean;
    isVerified: boolean;
    iat: number;
    exp: number;
}

export const decodeToken = (token: string): TokenPayload | null => {
    try {
        return jwtDecode(token);
    } catch (error) {
        console.error('Invalid token', error);
        return null;
    }
};

export const isTokenValid = (token: string): boolean => {
    const decodedToken = decodeToken(token);
    if (!decodedToken) return false;

    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp > currentTime;
}

// Function to handle login
export const login = async (credentials: LoginCredentials): Promise<LoginResponseInfo> => {
    try {
        const response = await axios.post<LoginResponse>('/login', credentials, {
            baseURL: authBaseUrl,
        });

        const data = response.data.responseInfo;
        if (data && !data.error) {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
        }
        return data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('Login error:', error.response.data);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};

export const refreshToken = async (): Promise<LoginResponseInfo | null> => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            throw new Error('No refresh token available');
        }

        const response = await axios.post<RefreshTokenResponse>('/refreshToken', { refreshToken: refreshToken }, {
            baseURL: authBaseUrl,
        });
        const data = response.data.responseInfo;

        if (data && !data.error) {
            localStorage.setItem('accessToken', data.accessToken);
            return data;
        }

        return null;
    } catch (error) {
        console.error('Error refreshing token:', error);
        return null;
    }
};

export const logout = (): void => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/sign-in';
};

export const signup = async (userData: userDataSchema): Promise<RegisterResponseInfo> => {
    try {
        const response = await axios.post<RegisterResponse>('/register', userData, {
            baseURL: authBaseUrl,
        });

        const data = response.data.responseInfo;
        return data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('Signup error:', error.response.data);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}
