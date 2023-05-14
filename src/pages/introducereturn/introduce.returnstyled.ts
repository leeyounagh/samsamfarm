import styled from "styled-components";
import sunflower from "../../../public/asset/해바라기.png";
import otherPlant from "../../../public/asset/other.png";

export const IntroduceReturnPage_div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-family: "DOSPilgiMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
`;

export const IntroduceReturnPage_p = styled.p`
  font-size: 1.8em;
`;

export const SelectPlantPage_div = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`;

export const SelectPlantPage_userPlant = styled.div`
  background-image: url(${sunflower});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 30%;
  height: 40%;
  max-width: 150px;
  margin: 10%;
  &:hover {
    transform: scale(1.2);
  }
`;
export const SelectPlantPage_otherPlant = styled.div`
  background-image: url(${otherPlant});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 30%;
  height: 40%;
  max-width: 150px;
  margin: 10%;
  &:hover {
    transform: scale(1.2);
  }
`;
export const Introduce_button_div = styled.div`
  font-size: 1.5em;
`;
export const Introuduce_Character = styled.img``;
