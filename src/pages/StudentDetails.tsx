import { useNavigate, useParams } from "react-router"
import students from "../students"


function StudentDetails() {
    const { id } = useParams()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const passData = ()=>{
        navigate("/dashboard/students",{
            state :{
                message : "viewing completed"
            }
        })
    }

    console.log(id)
    const studentdata = students.find((student) => {
        return student.id == Number(id)
    })

    if (studentdata === undefined) {
        return <h1>Data Not Found</h1>
    }

    return (
        <>
            <div>
                <h1>Sudent details</h1>
                <p>ID:{studentdata.id}</p>
                <p>Name:{studentdata.name}</p>
                <p>Email:{studentdata.email}</p>
                <p>Course:{studentdata.course}</p>
                <p>Gender:{studentdata.gender}</p>
            </div>

            <button onClick={goBack}>Go back</button>

            <button onClick={passData}>Demo for passing data</button>
        </>
    )
}

export default StudentDetails