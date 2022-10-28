import { Routes, Route,  BrowserRouter } from "react-router-dom";
import Home from "./app/pages/home/home.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>

  );
}
export default App;


