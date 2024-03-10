import { Navigate, Outlet } from "react-router-dom";

function useAuth(){
    const storage = localStorage.getItem("User");
    return storage && (JSON.parse(storage).Role === "ADMIN");
}

const ProtectedRoutes = () => {
    const isAdmin = useAuth();
    return isAdmin?<Outlet/>:<Navigate to="/sign-in"/>
}

export default ProtectedRoutes;