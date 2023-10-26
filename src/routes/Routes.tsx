import { Navigate, createBrowserRouter } from "react-router-dom";
import PreAuthLayout from "../views/layout/PreAuthLayout";
import Login from "../views/pages/login/Login";
import About from "../views/pages/about/About";
import AboutUsLayout from "../views/layout/AboutUsLayout";
import Contact from "../views/pages/contact/Contact";
import Todo from "../views/pages/todo/Todo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PreAuthLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutUsLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "about/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
