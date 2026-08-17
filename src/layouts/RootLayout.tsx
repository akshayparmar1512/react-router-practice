import { Link,Outlet } from "react-router"

function RootLayout () {
    return(
        <>
            <nav>
                <Link to = "/">Home</Link> |
                <Link to = "/about">About</Link> |
                  <Link to = "/dashboard">Dashboard</Link>
            </nav>

           <Outlet/>
        </>

    )
}

export default RootLayout