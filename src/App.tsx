import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./component/Layout/Layout";
import Landing from "./pages/Landing";
import Vote from "./pages/Vote";
import Sertif from "./pages/Sertif";

const App: React.FC = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="vote" element={<Vote />} />
        <Route path="sertif" element={<Sertif />} />
      </Route>
    </Routes>
  );
};

export default App;
