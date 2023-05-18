import styled from "styled-components";
import color from "../../styles/color";

export const FooterContainer = styled.footer`
  background-color: ${color.main};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  padding: 55px 50px;
  justify-content: space-around;
  display: flex;
  height: 300px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
`;

export const FooterLogo = styled.img`
  width: 300px;
  margin-left: 30px;

  @media screen and (max-width: 768px) {
    width: 200px;
    margin-left: 70px;
    margin-bottom: 10px;
  }
`;

export const FooterLeft = styled.div`
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

export const FooterLinks = styled.p`
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
`;

export const FooterLink = styled.a`
  display: inline-block;
  line-height: 1.8;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  margin-left: 10px;
  color: inherit;
`;

export const FooterCompanyName = styled.p`
  color: #222;
  font-size: 15px;
  font-weight: normal;
  margin: 0;
  margin-left: 10px;
`;

export const FooterCenter = styled.div`
  width: 35%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

  .icon {
    background-color: ${color.main};
    color: #fafafa;
    font-size: 20px;
    width: 35px;
    height: 35px;
    border-radius: 30%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
  }
`;

export const CenterText = styled.p`
  display: inline-block;
  color: #ffffff;
  font-weight: 400;
  vertical-align: middle;
  margin: 0;
  font-size: 20px;
  a {
    color: #19b46c;
    text-decoration: none;
    font-size: 20px;
  }
  span {
    color: #c578ce;
    display: block;
    font-weight: 600;
    font-size: 20px;
    line-height: 2;
  }
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const FooterRight = styled.div`
  width: 20%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterCompanyAbout = styled.p`
  line-height: 20px;
  color: #92999f;
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  text-align: center;
`;

export const CompanyAboutSpan = styled.span`
  display: block;
  color: #ffffff;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FooterIcons = styled.div`
  margin-top: 25px;
  justify-content: space-evenly;
  display: flex;
  .iconLink {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: ${color.main};
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-right: 3px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
