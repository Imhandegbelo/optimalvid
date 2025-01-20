import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import TopNav from "./component/TopNav";
import LikedMovieProvider from "./context/LikedVideosContext.tsx";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <LikedMovieProvider>
        <Router>
          <TopNav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<Detail />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </LikedMovieProvider>
    </div>
  );
}

export default App;
