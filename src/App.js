import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import Admin from "./pages/admin/Admin";
import Main from "./pages/main/Main";

function App() {
  return (
    <div className="App" >
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
