import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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

import HomeContainer from "./container/HomeContainer";
import SubscribeChannelsContainer from "./container/SubscribeChannelsContainer";
import TeamContainer from "./container/TeamContainer";
import LoginContainer from "./container/LoginContainer";
import SignupContainer from "./container/SignupContainer";
import AcceptBuddyRequestContainer from "./container/AcceptBuddyRequestContainer";
import MainHomePage from "./Pages/MainHomePage";
import PublicPage from "./Pages/PublicPage";

const LazyAbout = lazy(() => import('./Pages/About'));
const LazyHome = lazy(() => import('./Pages/Home'));
const LazyLogin = lazy(() => import('./Pages/Login'));
const LazySignup = lazy(() => import('./Pages/Signup'));
const LazySubscribe = lazy(() => import('./Pages/SubscribeChannels'));
const LazyTeamPage = lazy(() => import('./Pages/TeamPage'));
const LazyAcceptBuddy = lazy(() => import('./Pages/AcceptBuddyRequest'));

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(verifyUser())
  }, [])

  return (
    <>
      <BrowserRouter>

        <ErrorBoundary fallback={<ErrorText message="Opps! Some Erro Occurred" />}>

          <Routes>

            <Route path="/" element={<MainHomePage />}>

              <Route exact index element={<PrivateRoute><Suspense fallback={<Loader />}><HomeContainer /></Suspense></PrivateRoute>} />
              <Route exact path=":dataId" element={<PrivateRoute><Suspense fallback={<Loader />}><HomeContainer /></Suspense></PrivateRoute>} />
              <Route exact path="subscibe/channels" element={<PrivateRoute><Suspense fallback={<Loader />}><SubscribeChannelsContainer /></Suspense></PrivateRoute>} />
              <Route exact path="about" element={<PrivateRoute><Suspense fallback={<Loader />}><LazyAbout /></Suspense></PrivateRoute>} />

              <Route path="team">
                <Route exact index element={<PrivateRoute><Suspense fallback={<Loader />}><TeamContainer /></Suspense></PrivateRoute>} />
                <Route exact path=":userId" element={<PrivateRoute><Suspense fallback={<Loader />}><TeamContainer /></Suspense></PrivateRoute>} />
              </Route>
              
            </Route>



            <Route path="/sp" element={<PublicPage/>}>
              <Route exact path="login" element={<Suspense fallback={<Loader />}><LoginContainer /></Suspense>} />
              <Route exact path="signup" element={<Suspense fallback={<Loader />}><SignupContainer /></Suspense>} />
              <Route exact path="accept/invitation/:id" element={<Suspense fallback={<Loader />}><AcceptBuddyRequestContainer /></Suspense>} />
            </Route>




            <Route exact path="*" element={<ErrorPage />} />

          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
