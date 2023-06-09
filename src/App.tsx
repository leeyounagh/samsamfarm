import { Routes, Route } from "react-router-dom";
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
import StartPage from "./pages/StartPage/StartPage";
import AxiosInstance from "./api/AxiosIntance";
import { useEffect } from "react";
import { MusicProvider } from "./components/audioplayer/AudioPlayer";
import { decodeToken } from "react-jwt";
import { setData } from "./slice/DataSlice";
import { useDispatch } from "react-redux";
import { UserType } from "./types";

function App() {
  const jwtToken = localStorage.getItem("JWtToken");
  const deviceUser: UserType | null = jwtToken ? decodeToken(jwtToken) : null;
  const dispatch = useDispatch();

  useEffect(() => {
    if (deviceUser?.device_id) {
      const fetchData = async () => {
        try {
          const date = new Date();
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const timeObj = { time: `${hours}시:${minutes}분` };
          const response = await AxiosInstance.get("/device/plant-data/1");
          const data = await response.data.data;
          const mergedData = { ...timeObj, ...data };
          dispatch(setData(mergedData));
        } catch (err) {
          console.log(err);
        }
      };

      fetchData();

      const interval = setInterval(fetchData, 60000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <>
      <MusicProvider>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<Landing />} />

          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
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
        <Footer />
      </MusicProvider>
    </>
  );
}

export default App;
