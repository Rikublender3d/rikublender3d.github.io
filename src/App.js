import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
const APP_NAME = "snsapp"; // これが、リポジトリ名
function App() {
  return (
<BrowserRouter>
    <div className="App">
        <div>
      <Routes>
        <Route path={APP_NAME + '/' }element={<Home />} />
        <Route path={APP_NAME + '/signin'} element={<Signin />} />
        <Route path={APP_NAME + '/signup'} element={<Signup />} />
      </Routes>
    </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
