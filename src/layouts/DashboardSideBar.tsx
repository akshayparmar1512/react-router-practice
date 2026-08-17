import { NavLink, Outlet } from "react-router"
import style from './DashboardSideBar.module.css'
function DashboardSideBar (){
    return(
        <div>
            <aside>
                <nav>
                    <NavLink to="students"
                    className={(isActive)=>{
                        isActive?style.active : ""
                    }}
                    >Students</NavLink> |
                    <NavLink to ="courses">Courses</NavLink>  |
                    <NavLink to ="settings">Settings</NavLink>
                </nav>
            </aside>
            <main>
                <Outlet/>
            </main>
        </div>
    )

}
export default DashboardSideBar
