// src/routes/ProtectedRoute.tsx
import React, {JSX} from 'react';
import { Navigate } from 'react-router-dom';
import AuthService  from '../auth/AuthService';

interface ProtectedRouteProps {
    children: JSX.Element;
    redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
                                                                  children,
                                                                  // redirectPath = '/login',
                                                              }) => {
    if (! localStorage.getItem("authToken") ){
        console.log(AuthService);
        return <Navigate to="/login" replace />;
    }
    return children;
};