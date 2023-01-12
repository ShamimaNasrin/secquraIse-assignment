import Main from "../components/Main/Main";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([

    {
        path: "/",
        element: <Main></Main>
    },

    {
        path: "*",
        element: <div> 404 Not found</div>
    }

])

export default router;