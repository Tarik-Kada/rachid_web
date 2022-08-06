import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import OverOns from "./pages/OverOns";
import Diensten from "./pages/Diensten";
import Maatschappelijk from "./pages/Maatschappelijk";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  const scrollToTop = (() => {
    window.scrollTo({top: 0})
  })
  return (
    <div>
      <Layout>
          <AnimatePresence exitBeforeEnter initial={false} onExitComplete={scrollToTop}>
            <Routes key={location.pathname} location={location}>
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
          </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;
