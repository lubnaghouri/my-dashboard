
import axios from "axios";
import AuthContext from "./AuthContext"


import { useState, useEffect } from "react";
import SignupForm from "../pages/SignupForm";

const AuthContextPovider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);


    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            console.log("Stored user:", storedToken, storedUser);

            setToken(storedToken);
            setUser(storedUser);
        }
        setLoading(false);
    }, []);





    // Login function with validation
    const login = async (Credentials) => {
        setLoading(true);


        try {
            const response = await axios.post('http://localhost:9000/user/admin-login', Credentials);

            setUser(response.data.user);
            setToken(response.data.token);

            localStorage.setItem("token", response.data.token);
            localStorage.setItem('user', response.data.user);
            setLoading(false);
            return { status: 'success', message: 'Login successful' };

        } catch (error) {

            console.log(error);
            setLoading(false);
            return { status: "FAIL", message: error.message };

        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
        console.log("Logged out successfully");
    }

    return (
        <AuthContext.Provider value={{ login, loading, user, token, setToken, setUser, logout, SignupForm }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextPovider;