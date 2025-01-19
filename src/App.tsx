import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import TopNav from "./component/TopNav";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
