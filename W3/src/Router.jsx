import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { NowPlayingPage } from "./pages/NowPlayingPage";
import { PopularPage } from "./pages/PopularPage";
import { UpComing } from "./pages/UpComing";
import { TopRatedPage } from "./pages/TopRatedPage";
import { MovieDetailPage } from "./pages/MovieDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { SignUpForm } from "./pages/SignUpForm";
import { LoginPage } from "./pages/LoginPage";
import { SideBar } from "./components/SideBar";

export const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/nowplaying" element={<NowPlayingPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/detail" element={<MovieDetailPage />}></Route>
        <Route path="/detail/:id" element={<MovieDetailPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
