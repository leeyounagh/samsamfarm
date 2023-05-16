import React from "react";
import useSnowData from "../../hooks/useSnowData";
import * as Styled from "./startpage.styled";
import { useNavigate } from "react-router-dom";

const Snows = ({ color }: { color?: string }) => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/login");
  };

  const [snows] = useSnowData(30);

  return (
    <>
      <Styled.SnowContainer>
        <Styled.CenteredImage src="/asset/mainimg.png" alt="Background Image" />
        {snows.map((data, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              fontSize: window.innerWidth <= 768 ? "20px" : "35px",
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
