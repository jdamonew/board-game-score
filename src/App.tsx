import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Navigate replace to="/any" />} />
          <Route path="/any" element={<Home />}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;