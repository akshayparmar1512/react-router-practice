import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet, useNavigate } from "react-router";

function ProtectedRoutes (){
    
    const {isAuthenticated} = useContext(AuthContext)
    

    if(!isAuthenticated){
        return <Navigate to="/login" />
    }

    return <Outlet/>

    

}

export default ProtectedRoutes