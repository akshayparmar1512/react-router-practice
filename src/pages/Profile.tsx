import { useLoaderData } from "react-router"

function Profile (){
    const data = useLoaderData()
    console.log(data)
    return(
        <>
        <h1>Profile Page</h1>

        <p>Name:{data.name}</p>
        <p>Email:{data.email}</p>
        <p>Username:{data.username}</p>
       
        </>
    )
    
    
}

export default Profile