import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Books from "./pages/Books";
import NewBook from "./components/NewBook";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/hello",
        element: <h1>Hello Word!</h1>
    },
    {
        path: "/books",
        element: <Books />
    },
    {
        path: "/book/new",
        element: <NewBook />
    }
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    );
}