import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrivateRoute from "./HOC/withAuth";
// import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import React, { Suspense, lazy } from "react";
import Loader from "./Components/Loader";

const LazyAbout  = lazy(()=>import('./Pages/About'));
const LazyHome = lazy(()=>import ('./Pages/Home'));
const LazyLogin = lazy(()=>import('./Pages/Login'));
const LazySignup = lazy(()=>import ('./Pages/Signup'));

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route exact path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route exact path="/:dataId" element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route exact path="/about" element={<PrivateRoute><About/></PrivateRoute>}/>
           */}
          <Route exact path="/about" element={<Suspense fallback={<Loader/>}><LazyAbout/></Suspense>}/>
          <Route exact path="/:dataId" element={<Suspense fallback={<Loader/>}><LazyHome/></Suspense>}/>
          <Route exact path="/" element={<Suspense fallback={<Loader/>}><LazyHome/></Suspense>}/>
          <Route exact path="/login" element={<Suspense fallback={<Loader/>}><LazyLogin/></Suspense>}/>
          <Route exact path="/signup" element={<Suspense fallback={<Loader/>}><LazySignup/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
