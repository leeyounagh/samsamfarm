import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
// import Login from "./pages/login/Login";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Community from "./pages/community/Community";
import CommunityDetail from "./pages/communitydetail/CommunityDetail";
import CommunityUpdate from "./pages/communityupdate/CommunityUpdate";
import Mbti from "./pages/mbti/Mbti";
import MyPage from "./pages/mypage/MyPage";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/community" element={<Community />} />
        <Route path="/community:communityid" element={<CommunityDetail />} />
        <Route path="/mbti" element={<Mbti />} />
        <Route path="/communityupdate" element={<CommunityUpdate />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
