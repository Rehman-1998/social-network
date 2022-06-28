import Home from "./pages/home/Home";
import Service from "./pages/service/Service";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import About from "./pages/about/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/results" element={<Service />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-profile" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
