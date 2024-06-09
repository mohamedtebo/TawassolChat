import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectNotLogged = ({ children, isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }
    return children;
}

const ProtectLogged = ({ children, isAuthenticated }) => {
    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export {ProtectNotLogged, ProtectLogged}
