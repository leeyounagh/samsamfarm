import { useEffect, useState } from "react";
import * as Styled from "./getplant.styled";
import { useNavigate } from "react-router-dom";
import Btn1 from "../../components/button/Btn1";

export default function GetPlant() {
  const [isShowOpen, setIsShowOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsShowOpen(true);
    }, 3000);
  }, []);

  return (
    <Styled.Layout>
      <Styled.TitleDiv>
        <h2>꽃 배정이 완료 되었습니다.</h2>
        {isShowOpen ? (
          <Styled.BtnDiv
            onClick={() => {
              navigate("/");
            }}
          >
            <Btn1 title="메인으로 가기"></Btn1>
          </Styled.BtnDiv>
        ) : null}
      </Styled.TitleDiv>
    </Styled.Layout>
  );
}
