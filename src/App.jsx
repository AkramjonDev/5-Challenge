import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return (
    <>
      <div style={{ fontFamily: "Inter, sans-serif" }}>
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
