import { BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
// import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import React, { Suspense, lazy, useEffect } from "react";
import Loader from "./Components/Loader";
import ErrorText from "./Components/ErrorText";
import ErrorBoundary from "./Components/ErrorBoundary";
import ErrorPage from "./Components/ErrorPage";
import PrivateRoute from "./HOC/withAuth";
import { useDispatch } from "react-redux";
import { verifyUser } from "./redux";
const LazyAbout  = lazy(()=>import('./Pages/About'));
const LazyHome = lazy(()=>import ('./Pages/Home'));
const LazyLogin = lazy(()=>import('./Pages/Login'));
const LazySignup = lazy(()=>import ('./Pages/Signup'));
const LazySubscribe = lazy(()=>import('./Pages/SubscribeChannels'));
const LazyTeamPage = lazy(()=>import('./Pages/TeamPage'));
const LazyAcceptBuddy = lazy(()=>import('./Pages/AcceptBuddyRequest'));

function App() {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(verifyUser())
  },[])

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <ErrorBoundary fallback={<ErrorText message="Opps! Some Erro Occurred"/>}>
        <Routes>
          <Route exact path="/" element={<PrivateRoute><Suspense fallback={<Loader/>}><LazyHome/></Suspense></PrivateRoute>}/>
          <Route exact path="/about" element={<PrivateRoute><Suspense fallback={<Loader/>}><LazyAbout/></Suspense></PrivateRoute>}/>
          <Route exact path="/:dataId" element={<PrivateRoute><Suspense fallback={<Loader/>}><LazyHome/></Suspense></PrivateRoute>}/>
          <Route exact path="/subscibe/channels" element={<PrivateRoute><Suspense fallback={<Loader/>}><LazySubscribe/></Suspense></PrivateRoute>}/> 
          <Route exact path="/team" element={<PrivateRoute><Suspense fallback={<Loader/>}><LazyTeamPage/></Suspense></PrivateRoute>}/> 
          <Route exact path="/team/:userId" element={<PrivateRoute><Suspense fallback={<Loader/>}><LazyTeamPage/></Suspense></PrivateRoute>}/> 

          <Route exact path="/login" element={<Suspense fallback={<Loader/>}><LazyLogin/></Suspense>}/>
          <Route exact path="/signup" element={<Suspense fallback={<Loader/>}><LazySignup/></Suspense>}/>

          <Route exact path="/accept/invitation/:id" element={<Suspense fallback={<Loader/>}><LazyAcceptBuddy/></Suspense>}/>
          <Route exact path="*" element={<ErrorPage/>}/>
        </Routes>
       </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
