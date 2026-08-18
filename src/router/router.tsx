import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../layouts/RootLayout";
import DashboardSideBar from "../layouts/DashboardSideBar";
import Students from "../pages/Students";
import Courses from "../pages/Courses";
import Settings from "../pages/Settings";
import StudentDetails from "../pages/StudentDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Profile from "../pages/Profile";
import ProfileError from "../pages/ProfileError";


const profileLoader = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    if (!response.ok) {
        throw new Error("http error")
    } else {
        const data = await response.json()
        return data
    }

}

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,

        children: [

            {
                index: true,
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },

            {
                path: "/about",
                element: <About />

            },
            {
                path: "/dashboard",
                element: <ProtectedRoutes />,
                children: [
                    {
                        element: <DashboardSideBar />,

                        children: [

                            {
                                index: true,
                                element: <Dashboard />
                            },
                            {
                                path: "students",
                                element: <Students />
                            },
                            {
                                path: "students/:id",
                                element: <StudentDetails />
                            },

                            {
                                path: "courses",
                                element: <Courses />
                            },
                            {
                                path: "settings",
                                element: <Settings />
                            },
                            {
                                path: "profile",
                                element: <Profile />,
                                loader: profileLoader,
                                errorElement: <ProfileError />
                            },
                        ]
                    }
                ]
            }


        ]
    }
])

export default router