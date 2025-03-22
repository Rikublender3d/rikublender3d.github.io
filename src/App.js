import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
      <Routes>
        <Route path="snsapp" element={<Home />} />
        <Route path="snsapp/signin" element={<Signin />} />
        <Route path="snsapp/signup" element={<Signup />} />
      </Routes>
    </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
