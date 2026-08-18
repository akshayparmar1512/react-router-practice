import { useRouteError } from "react-router";

function ProfileError() {
    const error = useRouteError()

    console.log("ERROR OBJECT:", error);
    

    return (
        <>
            <h1>Something Went Wrong</h1>
            <p>{error instanceof Error ? error.message : "unknown error" }</p>

        </>
    )
}

export default ProfileError