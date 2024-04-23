import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Lodging from "./Lodging";
import Error404 from "./Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging/:id" element={<Lodging />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
