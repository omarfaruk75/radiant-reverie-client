
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../CustomHook/useAuth';
import { Grid } from 'react-loader-spinner'

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) return (<Grid
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
    />)

    if (user) return children;

    return <Navigate to={'/login'} state={location.pathname} />
}

export default ProtectedRoute;