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
<<<<<<< HEAD
        <Route path="/snsapp" element={<Home />} />
        <Route path="/snsapp/signin" element={<Signin />} />
        <Route path="/snsapp/signup" element={<Signup />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
>>>>>>> 62361c62dbadfb856e5982889320b4df7472149e
      </Routes>
    </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
