import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Career from "../components/pages/Career";
import App from "../App";
import Category from "../components/pages/Category";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ForgotPassword from "../components/auth/ForgotPassword";
import SingleNews from "../components/pages/SingleNews";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children:[
            {
                path: "/category/:id",
                element: <Category />,
                loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`)
              }
        ]
      },
      {
        path:"home",
        element:<Home/>,
        loader: ()=> fetch("http://localhost:5000/news")
      },
      {
        path:"/singlenews/:id",
        element:<SingleNews/>,
        loader:({params})=> fetch(`http://localhost:5000/singlenews/${params.id}`)

      }
  
    ],
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"register",
    element:<Register/>
  },
  {
    path:"forgot",
    element:<ForgotPassword/>
  }
  
]);

export default router;
