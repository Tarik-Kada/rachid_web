import { Routes, Route } from "react-router-dom";
// import logo from './images/favicon.png';
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import OverOns from "./pages/OverOns";
import Diensten from "./pages/Diensten";
import Maatschappelijk from "./pages/Maatschappelijk";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/over" element={<OverOns />}></Route>
          <Route path="/diensten" element={<Diensten />}></Route>
          <Route path="/maatschappelijk" element={<Maatschappelijk />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path="/new" element={<NewMeetupsPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
