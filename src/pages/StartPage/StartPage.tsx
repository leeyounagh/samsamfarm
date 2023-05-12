import React from "react";
import useSnowData from "./StartPageData";
import * as Styled from "./startpage.styled";
import mainImage from "../../../public/asset/mainimg.png";
import { useNavigate } from "react-router-dom";
// 눈의 색상은 props로 받음, useSnowData 훅으로 눈들의 데이터를 가져오고 적용

const Snows = ({ color }: { color?: string }) => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/login");
  };
  const [snows] = useSnowData(30);
  return (
    <>
      <Styled.SnowContainer>
        <Styled.CenteredImage src={mainImage} alt="Background Image" />
        {snows.map((data, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              fontSize: "35px",
              color: `${color}`,
              left: `${data.x}px`,
              top: `${data.y}px`,
            }}
          >
            🍀
          </div>
        ))}
        <Styled.StartButton onClick={handleStartClick}>
          START
        </Styled.StartButton>
      </Styled.SnowContainer>
    </>
  );
};

export default React.memo(Snows);
