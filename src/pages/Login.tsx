import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router"

function Login (){
    
    const {register,handleSubmit} = useForm <Inputs>()
    
    const {login,isAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(isAuthenticated)

    const onSubmit = (data)=>{
        login()
        console.log(data)
         navigate("/dashboard")
    }
   

    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="password">Password:</label>
                <input type="password" {...register("password")} />

                <button type="submit">Login</button>

            </form>

        </>
    )
}

export default Login    