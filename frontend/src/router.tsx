import { createBrowserRouter } from "react-router-dom";

import HomeScreen from "./screens/Home";
import ProjectScreen from "./screens/Project";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeScreen />
    },
    {
        path: '/projects/:id',
        element: <ProjectScreen />
    }
])

export default router