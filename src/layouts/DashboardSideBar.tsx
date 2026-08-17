import { NavLink, Outlet } from "react-router"
import style from './DashboardSideBar.module.css'
function DashboardSideBar (){
    return(
        <div>
            <aside>
                <nav>
                    <NavLink to="students"
                    className={({isActive})=>{
                        return isActive?style.active:""
                    }}
                    >Students</NavLink> |
                    <NavLink to ="courses"
                     className={({isActive})=>{
                        return isActive?style.active:""
                    }}
                    >Courses</NavLink>  |
                    <NavLink to ="settings"
                     className={({isActive})=>{
                        return isActive?style.active:""
                    }}
                    >Settings</NavLink>
                </nav>
            </aside>
            <main>
                <Outlet/>
            </main>
        </div>
    )

}
export default DashboardSideBar
