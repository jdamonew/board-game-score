import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home";
import Rummikub from "./pages/Rummikub";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Navigate replace to="/any" />} />
          <Route path="/any" element={<Home />}/>
          <Route path="/rummikub" element={<Rummikub />}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;