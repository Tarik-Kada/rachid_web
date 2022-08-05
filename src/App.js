import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import OverOns from "./pages/OverOns";
import Diensten from "./pages/Diensten";
import Maatschappelijk from "./pages/Maatschappelijk";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/over" element={<OverOns />}></Route>
            <Route path="/diensten" element={<Diensten />}></Route>
            <Route
              path="/maatschappelijk"
              element={<Maatschappelijk />}
            ></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </ScrollToTop>
      </Layout>
    </div>
  );
}

export default App;
