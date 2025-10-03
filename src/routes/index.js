import Home from "../pages/Home";
import Artwork from "../pages/Artwork";
import Model3D from "../pages/Model3D";
import Animation2D from "../pages/Animation2D";
// import Notes from "../pages/Notes";

import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/artwork",
    element: <Artwork />,
  },
  {
    path: "/threeDModel",
    element: <Model3D />,
  },
  {
    path: "/twoDAnimation",
    element: <Animation2D />,
  },
  // {
  //   path: "/notes", // 修改这里的路径
  //   element: <Notes />,
  // },
];
export default routes;
