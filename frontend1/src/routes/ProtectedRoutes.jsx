import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectNotLogged = ({ children, isAuthenticated }) => {
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            const timer = setTimeout(() => {
                setShouldRedirect(true);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [isAuthenticated]);

    if (shouldRedirect) {
        return <Navigate to="/auth" replace />;
    }
    return children;
}

const ProtectLogged = ({ children, isAuthenticated }) => {
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            const timer = setTimeout(() => {
                setShouldRedirect(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isAuthenticated]);

    if (shouldRedirect) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export {ProtectNotLogged, ProtectLogged}
