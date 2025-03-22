import {Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
function App() {
  return (
<HashRouter  basename="/snsapp">
    <div className="App">
        <div>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
      </div>
    </HashRouter>
  );
}

export default App;
