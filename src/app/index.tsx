import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import BasicLayout from '@components/Layout/BasicLayout';
import DefaultLayout from '@components/Layout/DefaultLayout';
import { useAuthControllerScope } from '@controllers/auth';
import { AppStatusEnum } from '@implementation/auth/types';
import AboutPage from '@pages/About';
import AirQualityPage from '@pages/AirQuality';
import { LoginPage } from '@pages/Auth/LoginPage';
import LogoutPage from '@pages/Auth/LogoutPage';
import { RegisterPage } from '@pages/Auth/RegisterPage';
import CovidPage from '@pages/Covid19';
import Ambulances from '@pages/Covid19/views/Ambulances';
import Statistic from '@pages/Covid19/views/Statistic';
import HomePage from '@pages/Home';
import NotesPage from '@pages/Notes';
import CreateDirectory from '@pages/Notes/views/CreateDirectory';
import CreateNote from '@pages/Notes/views/CreateNote';
import NotesOverview from '@pages/Notes/views/Overview';
import UpdateDirectory from '@pages/Notes/views/UpdateDirectory';
import UpdateNote from '@pages/Notes/views/UpdateNote';
import SearchPage from '@pages/SearchPage';
import WishlistPage from '@pages/Wishlist';
import WishlistOverview from '@pages/Wishlist/views/Overview';
import WishlistShare from '@pages/Wishlist/views/Share';
import { Loading } from '@reactoso-ui';
import { useSelector } from '@service';
import './style/style.scss';

const App = (): JSX.Element => {
  const authController = useAuthControllerScope();
  const appStatus = useSelector(authController.implementation.auth.selectors.selectAppStatus);
  const isLoggedIn = useSelector(authController.implementation.auth.selectors.selectIsLoggedIn);
  if (appStatus === AppStatusEnum.NotReady) {
    return (
      <div className="loading-overlay">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/search"
            element={
              <DefaultLayout>
                <SearchPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/sign-in"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <BasicLayout>
                  <LoginPage />
                </BasicLayout>
              )
            }
          />
          <Route path="/sign-out" element={!isLoggedIn ? <Navigate to="/" /> : <LogoutPage />} />
          <Route
            path="/sign-up"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <BasicLayout>
                  <RegisterPage />
                </BasicLayout>
              )
            }
          />
          <Route
            path="/notes"
            element={
              isLoggedIn ? (
                <DefaultLayout>
                  <NotesPage />
                </DefaultLayout>
              ) : (
                <Navigate to="/" />
              )
            }
          >
            <Route path="" element={<NotesOverview />} />
            <Route path="create-directory" element={<CreateDirectory />} />
            <Route path=":directoryId">
              <Route path="" element={<CreateNote />} />
              <Route path="update" element={<UpdateDirectory />} />
              <Route path=":noteId" element={<UpdateNote />} />
            </Route>
          </Route>
          <Route
            path="/wishlist"
            element={
              <DefaultLayout>
                <WishlistPage />
              </DefaultLayout>
            }
          >
            <Route path="" element={<WishlistOverview />} />
            <Route path="share" element={<WishlistShare />} />
          </Route>
          <Route
            path="/covid19"
            element={
              <DefaultLayout>
                <CovidPage />
              </DefaultLayout>
            }
          >
            <Route path="" element={<Statistic />} />
          </Route>
          <Route
            path="/ambulances"
            element={
              <DefaultLayout>
                <CovidPage />
              </DefaultLayout>
            }
          >
            <Route path="" element={<Ambulances />} />
          </Route>
          <Route
            path="/air-quality"
            element={
              <DefaultLayout>
                <AirQualityPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/about"
            element={
              <DefaultLayout>
                <AboutPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/"
            element={
              <BasicLayout>
                <HomePage />
              </BasicLayout>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
