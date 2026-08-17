import { useParams } from "react-router"
import students from "../students"


function StudentDetails (){
    const {id} = useParams()
    
    const studentdata = students.find((student)=>{
        return student.id == Number(id)
    })
    console.log(studentdata)
    return (
       <div>
        <h1>Sudent details</h1>
        <p>ID:{studentdata.id}</p>
        <p>Name:{studentdata.name}</p>
         <p>Email:{studentdata.email}</p>
          <p>Course:{studentdata.course}</p>
           <p>Gender:{studentdata.gender}</p>
       </div>
    )
}

export default StudentDetails