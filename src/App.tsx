import { DialogProvider } from "contexts/DialogContext";
import { StoreProvider } from "contexts/StoreContext";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "react-indiana-drag-scroll/dist/style.css";
import SneakerRoute from "routes/SneakerRoute";
import AboutRoute from "routes/AboutRoute";
import { CustomThemeProvider } from "contexts/CustomThemeContext";
import PrivateRoute from "routes/PrivateRoute";
import LoginPage from "pages/LoginPage";
import WelcomePage from "pages/WelcomePage";
import HomePage from "pages/HomePage";

const NewsPage = lazy(() => import("pages/NewsPage"));
const AboutPage = lazy(() => import("pages/AboutPage"));
const AboutMainPage = lazy(() => import("pages/AboutMainPage"));
const BenefitsPage = lazy(() => import("pages/BenefitsPage"));
const TeamsPage = lazy(() => import("pages/TeamsPage"));
const SneakerStart1Page = lazy(() => import("pages/SneakerStart1"));
const SneakerStart2Page = lazy(() => import("pages/SneakerStart2"));
const SneakerMoreInfoPage = lazy(() => import("pages/SneakerMoreInfo"));
const SneakerGalleryPage = lazy(() => import("pages/SneakerGalleryPage"));
const SneakerDescPage = lazy(() => import("pages/SneakerDescPage"));
const SneakerDetailPage = lazy(() => import("pages/SneakerDetailPage"));
const FaqPage = lazy(() => import("pages/FaqPage"));
const RoadmapPage = lazy(() => import("pages/RoadmapPage"));

function App() {
  return (
    <CustomThemeProvider>
      <StoreProvider>
        <DialogProvider>
          <Suspense fallback={<div></div>}>
            <Routes>
              <Route
                path=""
                element={<PrivateRoute element={<HomePage />} />}
              />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/about"
                element={<PrivateRoute element={<AboutRoute />} />}
              >
                <Route path="" element={<SneakerStart1Page />} />
                <Route path="intro" element={<AboutPage />} />
                <Route path="main" element={<AboutMainPage />} />
                <Route path="benefits" element={<BenefitsPage />} />
                <Route path="team" element={<TeamsPage />} />
                <Route path="faq" element={<FaqPage />} />
              </Route>
              <Route
                path="/sneaker"
                element={<PrivateRoute element={<SneakerRoute />} />}
              >
                <Route path="" element={<SneakerMoreInfoPage />} />
                <Route path="more" element={<SneakerStart2Page />} />
                <Route path="gallery" element={<SneakerGalleryPage />} />
                <Route path="desc" element={<SneakerDescPage />} />
                <Route path="detail" element={<SneakerDetailPage />} />
              </Route>
              <Route path="/roadmap">
                <Route
                  path=""
                  element={<PrivateRoute element={<RoadmapPage />} />}
                />
              </Route>
              <Route path="/news">
                <Route
                  path=""
                  element={<PrivateRoute element={<NewsPage />} />}
                />
              </Route>
            </Routes>
          </Suspense>
        </DialogProvider>
      </StoreProvider>
    </CustomThemeProvider>
  );
}

export default App;
