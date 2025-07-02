import { createBrowserRouter, RouterProvider } from "react-router-dom"




const router = createBrowserRouter([
 {path: "/",
  element: <Layout/>,
  children: [
    {path: "/", element: <Home/>},
    {path: "/products", element: <Products/>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/>},
   {path: "*", element: <NotFound/>},
  ]}
])


function App() {


  return (
  <>
 <RouterProvider router={router}></RouterProvider>
  </>
  )
}

export default App
