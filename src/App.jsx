import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrivateRoute from "./HOC/withAuth";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
        <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route exact path="/about" element={<PrivateRoute><About/></PrivateRoute>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
