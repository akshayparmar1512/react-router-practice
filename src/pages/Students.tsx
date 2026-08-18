import { Link, useSearchParams } from "react-router";
import students from "../students";
import { useNavigate, useLocation } from "react-router";

function Students() {

    const [searchParams,setSearchParams] = useSearchParams()

    const searchval = searchParams.get("search") || ""
    

    const handleChange = (e:React.ChangeEvent)=>{
        setSearchParams({search : e.target.value})
    }
    console.log(searchval)

    const location = useLocation()
    console.log(location.pathname)
    // console.log(location.state)
    console.log(location.search)

    const filteredData = students.filter((student)=>{
        return student.name.toLowerCase().includes(searchval.toLowerCase())
    })
  
    return (
        <>
            <div>
                <h1>Students Page</h1>

            <input type="text" value={searchval}  onChange={handleChange} />



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
                            filteredData.map((student) => {
                                return (
                                    <tr key={student.id}>
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
               <p>{location.state?.message}</p>
        </>
    )
}

export default Students