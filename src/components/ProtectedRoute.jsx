
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../CustomHook/useAuth';

const ProtectedRoute = () => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;