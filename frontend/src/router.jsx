import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import PostAdd from "./components/PostAdd";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/post/create", element: <PostAdd/> },
]);

export default router;