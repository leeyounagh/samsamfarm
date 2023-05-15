import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Community from "./pages/community/Community";
import CommunityUpdate from "./pages/communityupdate/CommunityUpdate";
import MyPage from "./pages/mypage/MyPage";
import Register from "./pages/register/Register";
import Introduce from "./pages/intoduce/Introduce";
import IntroduceReturnPage from "./pages/introducereturn/IntroduceReturnPage";
import SelectPlantPage from "./pages/selectplant/SelectPlantPage";
import SelectMbtiPlantPage from "./pages/selectmbti/SelectMbtiPlantPage";
import PlantDescriptionPage from "./pages/plantdescription/PlantDescriptionPage";
import GetPlant from "./pages/getplant/GetPlant";
import StartPage from "./pages/startpage/StartPage";
import { useEffect } from "react";
import { MusicProvider } from "./components/audioplayer/AudioPlayer";
import { setData } from "./slice/DataSlice";
import { useDispatch } from "react-redux";

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/startpage";
  const jwtToken = localStorage.getItem("JWtToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!jwtToken) {
      navigate("/");
    }
  }, []);
  // useEffect(() => {

  // }, []);
  return (
    <>
      <MusicProvider>
        {!isMainPage && <Header />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/startpage" element={<StartPage />} />

          <Route path="/communityupdate" element={<CommunityUpdate />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/story/introduce" element={<Introduce />} />
          <Route
            path="/story/introduceReturnPage"
            element={<IntroduceReturnPage />}
          />
          <Route path="/story/selectPlantPage" element={<SelectPlantPage />} />

          <Route
            path="/story/selectMbtiPlantPage"
            element={<SelectMbtiPlantPage />}
          />

          <Route
            path="/story/plantDescriptionPage/:plantId"
            element={<PlantDescriptionPage />}
          />
          <Route path="/story/getplant" element={<GetPlant />} />
        </Routes>
        {!isMainPage && <Footer />}
      </MusicProvider>
    </>
  );
}

export default App;
