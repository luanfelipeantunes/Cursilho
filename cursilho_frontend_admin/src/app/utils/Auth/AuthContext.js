import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../Utils';
import { Constants } from '../Constants';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem('authToken');

    useEffect(() => {

        if (token) {
            axiosInstance.get(Constants.baseUrl + '/user')
                .then(response => {
                    setUser(response.data);
                    console.log("Usuário logado: ", response.data);
                })
        }

    }, [token]);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);