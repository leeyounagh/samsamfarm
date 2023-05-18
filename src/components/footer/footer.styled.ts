import styled from "styled-components";
import color from "../../styles/color";

export const FooterContainer = styled.footer`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  height: 150px;
  background-color: ${color.main};
  width: 100%;
  @media screen and (max-width: 480px) {
    height: 180px;
    padding-top: 20px;
  }
`;

export const Footerbox = styled.div`
  width: 80%;
  height: 150px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterText = styled.div`
  font-size: 1.2rem;
  float: right;
  /* margin: 45px 0 0 30px; */
  color: #555;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 1rem;
  }
`;

export const FooterLogo = styled.img`
  /* float: left; */
  width: 250px;

  @media screen and (max-width: 768px) {
    width: 180px;
    margin-left: 10px;
  }
`;
