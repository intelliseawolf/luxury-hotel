import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HotelDetail from "./pages/HotelDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:id" element={<HotelDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
