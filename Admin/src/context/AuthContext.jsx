import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminContext = createContext(undefined);

export function useAdminAuth(){
    const context = useContext(AdminContext);
    if(!context){
        throw new Error('useAdminAuth must be used within an AdminProvider');
    }
    return context;
}

export const AdminAuthProvider = ({children}) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const storedAdmin = localStorage.getItem('admin_token');

        if(storedAdmin){
            const payload = JSON.parse(atob(storedAdmin.split('.')[1]));
            if(payload.exp * 1000 > Date.now()){
                setToken(storedAdmin);
                const newAdmin = {
                    id: payload.id,
                    email: payload.email
                }
                setAdmin(newAdmin);
            }else{
                localStorage.removeItem('admin_token');
            }
        }
        setLoading(false);
    }, []);

    const login = (adminData, adminToken) => {
        setAdmin(adminData);
        setToken(adminToken);
        localStorage.setItem('admin_token', adminToken);
        navigate('/admin/dashboard');
    };

    const logout = () => {
        setAdmin(null);
        setToken(null);
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
    }
    
    const isAuthenticated = () => {
        return !!admin && !!token;
    };

    const getAuthHeaders = () => {
        return {
            Authorization : `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    
    const value = {
        admin, 
        loading, 
        token,
        login,
        logout,
        isAuthenticated,
        getAuthHeaders
    }

  return (
    <AdminContext.Provider value = {value}>
        {children}
    </AdminContext.Provider>
  )
}