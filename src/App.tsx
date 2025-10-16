import { createBrowserRouter } from "react-router-dom";

import Layout from "./component/Layout/Layout";
import Landing from "./pages/Landing";
import Vote from "./pages/Vote";
import Sertif from "./pages/Sertif";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/vote",
        element: <Vote />,
      },
      {
        path: "/sertif",
        element: <Sertif />,
      },
    ],
  },
]);

export default App;
