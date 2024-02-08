import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./Pages/About";
import React, { Suspense, lazy, useEffect } from "react";
import Loader from "./Components/Loader";
import ErrorText from "./Components/ErrorText";
import ErrorBoundary from "./Components/ErrorBoundary";
import ErrorPage from "./Components/ErrorPage";
import PrivateRoute from "./HOC/withAuth";
import { useDispatch } from "react-redux";
import { verifyUser } from "./redux";

import MainHomePage from "./Pages/MainHomePage";
import PublicPage from "./Pages/PublicPage";

const LazyAbout = lazy(() => import('./Pages/About'));
const LazyHome = lazy(() => import('./container/HomeContainer'));
const LazyLogin = lazy(() => import('./container/LoginContainer'));
const LazySignup = lazy(() => import('./container/SignupContainer'));
const LazySubscribe = lazy(() => import('./container/SubscribeChannelsContainer'));
const LazyTeamPage = lazy(() => import('./container/TeamContainer'));
const LazyAcceptBuddy = lazy(() => import('./container/AcceptBuddyRequestContainer'));
const LazyDetailsPage = lazy(() => import('./container/DetailsContainer'));
const LazyDetailsWelcome = lazy(() => import('./Components/DetailsWelcome'));

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

              <Route exact element={<PrivateRoute><Suspense fallback={<Loader />}><LazyHome /></Suspense></PrivateRoute>}>
                <Route exact index element={<Suspense fallback={<Loader />}><LazyDetailsWelcome /></Suspense>} />
                <Route exact path=":dataId" element={<Suspense fallback={<Loader />}><LazyDetailsPage /></Suspense>} />
              </Route>

              <Route exact path="subscibe/channels" element={<PrivateRoute><Suspense fallback={<Loader />}><LazySubscribe /></Suspense></PrivateRoute>} />
              <Route exact path="about" element={<PrivateRoute><Suspense fallback={<Loader />}><LazyAbout /></Suspense></PrivateRoute>} />
              <Route exact path="team" element={<PrivateRoute><Suspense fallback={<Loader />}><LazyTeamPage /></Suspense></PrivateRoute>} />

            </Route>



            <Route path="/sp" element={<PublicPage />}>
              <Route exact path="login" element={<Suspense fallback={<Loader />}><LazyLogin /></Suspense>} />
              <Route exact path="signup" element={<Suspense fallback={<Loader />}><LazySignup /></Suspense>} />
              <Route exact path="accept/invitation/:id" element={<Suspense fallback={<Loader />}><LazyAcceptBuddy /></Suspense>} />
            </Route>




            <Route exact path="*" element={<ErrorPage />} />

          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
