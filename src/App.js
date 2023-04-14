import FullPoke from "./components/FullPoke/FullPoke.js";
import Home from "./components/Home/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/:id">
          <Route index element={<FullPoke />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
