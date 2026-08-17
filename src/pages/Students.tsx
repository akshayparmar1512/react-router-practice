import { Link } from "react-router";
import students from "../students";


function Students(){

    return(
        <div>
            <h1>Students Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    students.map((student)=>{
                        return(
                            <tr>
                                <td>{student.name}</td>
                                 <td>{student.email}</td>
                                  <td>{student.course}</td>
                                   <td>{student.gender}</td>
                                   <td>
                                    <Link to={`./${student.id}`}>View Details</Link>
                                   </td>
                            </tr>
                        )
                    })

                   }
                </tbody>
            </table>
        </div>
    )
}

export default Students