import { useEffect } from 'react'
import { useAdminAuth } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {loading, isAuthenticated } = useAdminAuth();
    const navigate = useNavigate();
    if(loading){
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
            </div>
        )
    }
    if(!isAuthenticated()){
        return <Navigate to="/admin/login" replace />;
    }
    
    return children;
}

export default ProtectedRoute