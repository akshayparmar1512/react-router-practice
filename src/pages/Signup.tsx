import { useForm } from "react-hook-form"


function Signup(){

    const {register,handleSubmit} = useForm()

    return(
        <>
            <h1>Signup Page</h1>

            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" {...register("name")} />

                 <label htmlFor="email">Email:</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="password">Password:</label>
                <input type="password" {...register("password")} />

                <label htmlFor="confirmpassword">Confirm Password:</label>
                <input type="password"  {...register("confirmpassword")}/>

                <button type="submit">Sign Up</button>

            </form>

        </>

    )
}

export default Signup