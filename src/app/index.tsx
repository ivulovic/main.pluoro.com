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
    return <Loading />;
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/login"
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
          <Route path="/logout" element={!isLoggedIn ? <Navigate to="/" /> : <LogoutPage />} />
          <Route
            path="/register"
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
          <Route path="/wishlist" element={<WishlistPage />}>
            <Route
              path=""
              element={
                <DefaultLayout>
                  <WishlistOverview />
                </DefaultLayout>
              }
            />
            <Route
              path="share"
              element={
                <DefaultLayout>
                  <WishlistShare />
                </DefaultLayout>
              }
            />
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
              <DefaultLayout>
                <HomePage />
              </DefaultLayout>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
