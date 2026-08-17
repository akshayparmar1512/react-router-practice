import { createBrowserRouter} from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../layouts/RootLayout";
import DashboardSideBar from "../layouts/DashboardSideBar";
import Students from "../pages/Students";
import Courses from "../pages/Courses";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
    {
        path :"/",
        element:<RootLayout/>,

        children : [
          
            {
                index:true,
                element:<Home/>
            },
            {   
                path:"/about",
                element:<About/>

            },
            {
                path:"/dashboard",
                element:<DashboardSideBar/>,
                children : [
                    {
                        index : true,
                        element : <Dashboard/>
                    },
                    {
                        path : "students",
                        element : <Students/>
                    },
                    {
                        path : "courses",
                        element : <Courses/>
                    },
                    {
                        path : "settings",
                        element : <Settings/>
                    }
                ]
            }

        ]
    }
])

export default router