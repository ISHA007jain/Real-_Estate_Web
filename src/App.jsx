import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/Errorpage";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./components/layout/Applayout";

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
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;