import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Community from "./pages/community/Community";
import CommunityUpdate from "./pages/communityupdate/CommunityUpdate";
import Mbti from "./pages/mbti/Mbti";
import MyPage from "./pages/mypage/MyPage";
import Register from "./pages/register/Register";
import Introduce from "./pages/story/Introduce";
import IntroduceReturnPage from "./pages/story/IntroduceReturnPage";
import SelectPlantPage from "./pages/story/SelectPlantPage";
import PlantConfirmPage from "./pages/story/PlantConfirmPage";
import PlantConfirmReturnPage from "./pages/story/PlantConfirmReturnPage";
import SelectMbtiPlantPage from "./pages/story/SelectMbtiPlantPage";
import AccessPage from "./pages/story/AccessPage";
import PlantDescriptionPage from "./pages/story/PlantDescriptionPage";
import StartPage from "./pages/StartPage/StartPage";
import We from "./pages/register/We";

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/mainpage";
  return (
    <>
      {!isMainPage && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/we" element={<We />} />

        <Route path="/mbti" element={<Mbti />} />
        <Route path="/communityupdate" element={<CommunityUpdate />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/introduceReturnPage" element={<IntroduceReturnPage />} />
        <Route path="/selectPlantPage" element={<SelectPlantPage />} />
        <Route path="/plantConfirmPage" element={<PlantConfirmPage />} />
        <Route
          path="/plantConfirmReturnPage"
          element={<PlantConfirmReturnPage />}
        />
        <Route path="/selectMbtiPlantPage" element={<SelectMbtiPlantPage />} />
        <Route path="/accessPage" element={<AccessPage />} />
        <Route
          path="/plantDescriptionPage"
          element={<PlantDescriptionPage />}
        />
      </Routes>
      {!isMainPage && <Footer />}
    </>
  );
}

export default App;
