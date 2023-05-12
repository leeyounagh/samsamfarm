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
import PlantConfirmPage from "./pages/plantconfirmpage/PlantConfirmPage";
import PlantConfirmReturnPage from "./pages/plantconfirmreturn/PlantConfirmReturnPage";
import SelectMbtiPlantPage from "./pages/selectmbti/SelectMbtiPlantPage";
import AccessPage from "./pages/access/AccessPage";
import PlantDescriptionPage from "./pages/plantdescription/PlantDescriptionPage";
import GetPlant from "./pages/getplant/GetPlant";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
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
        <Route path="/story/plantConfirmPage" element={<PlantConfirmPage />} />
        <Route
          path="/story/plantConfirmReturnPage"
          element={<PlantConfirmReturnPage />}
        />
        <Route
          path="/story/selectMbtiPlantPage"
          element={<SelectMbtiPlantPage />}
        />
        <Route path="/story/accessPage" element={<AccessPage />} />
        <Route
          path="/story/plantDescriptionPage/:plantId"
          element={<PlantDescriptionPage />}
        />
        <Route path="/story/getplant" element={<GetPlant />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
