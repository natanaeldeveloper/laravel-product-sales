import { createBrowserRouter } from "react-router-dom";

import HomeScreen from "./screens/Home";
import ProjectScreen from "./screens/Project";
import ProjectEditScreen from "./screens/Project/Edit";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeScreen />
    },
    {
        path: '/projects/:projectId',
        element: <ProjectScreen />
    },
    {
        path: '/projects/:projectId/edit',
        element: <ProjectEditScreen />
    }
])

export default router