import { Routes, Route, useNavigate } from "react-router-dom";
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

function App() {
  const jwtToken = localStorage.getItem("JWtToken");
  const deviceUser: any = decodeToken(localStorage.JWtToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!jwtToken) {
      navigate("/");
    }
  }, []);
  const timeObj = { time: "10:40" };

  const dataObj = {
    temperature: "24.8",
    humid: "37.0",
    moisture: "100.0",
    bright: 100,
    id: 1,
  };

  const mergedObj = Object.assign({}, timeObj, { data: dataObj });

  console.log(mergedObj);
  useEffect(() => {
    if (deviceUser.device_id) {
      const handleDevice = async () => {
        try {
          const date = new Date();
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const timeObj = { time: `${hours}시:${minutes}분` };
          // 넘버인데 스트링으로 넘겨줘야됨
          const response = await AxiosInstance.get(`/device/plant-data/1`);
          const data = await response.data.data;
          const mergedData = Object.assign({}, timeObj, data);
          dispatch(setData(mergedData));
        } catch (err) {
          console.log(err);
        }
      };
      handleDevice();
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
