import { Link } from "react-router"

function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <h2>Welcome To The Student Management Application</h2>

            <Link to="/login">Login</Link> | 
            <Link to="/signup">Signup</Link>
        </div>
    )

}
export default Home