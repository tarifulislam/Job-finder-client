import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Forms/SignUp";
import SignIn from "../Pages/Forms/SignIn";
import TabCartDetails from "../Pages/Home/TabCategory/TabCartDetails";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import UpdateJobPost from "../Pages/MyPostedJob/UpdateJobPost";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "signIn",
                element: <SignIn></SignIn>
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "jobDetails/:id",
                element: <TabCartDetails></TabCartDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "addJob",
                element: <AddJob></AddJob>
            },
            {
                path: "postedJobs",
                element: <MyPostedJob></MyPostedJob>
            },
            {
                path: "updateJobPost/:id",
                element: <UpdateJobPost></UpdateJobPost>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)

            },

        ]
    },
]);
export default myRouter;
