import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/Errorpage";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact.jsx";
import {Success } from "./pages/Success"; 
import { AppLayout } from "./components/layout/Applayout";
import About from "./pages/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element:<About/>
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
           path: "/success",
           element: <Success /> 
        }
      ]
    }
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;