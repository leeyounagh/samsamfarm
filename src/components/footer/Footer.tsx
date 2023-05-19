import * as Styled from "./footer.styled";
import FooterLogo from "../../../public/logo/FtLogo.png";
import { BsPinMapFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiFillGitlab } from "react-icons/ai";

const Footer = () => {
  return (
    <Styled.FooterContainer>
      <Styled.FooterLeft>
        <Styled.FooterLogo src={FooterLogo} alt="로고" />
        <Styled.FooterLinks>
          <Styled.FooterLink href="/main" className="link-1">
            Home |
          </Styled.FooterLink>
          <Styled.FooterLink href="#">Blog |</Styled.FooterLink>
          <Styled.FooterLink href="#">Pricing |</Styled.FooterLink>
          <Styled.FooterLink href="#">About |</Styled.FooterLink>
          <Styled.FooterLink href="#">Faq |</Styled.FooterLink>
          <Styled.FooterLink href="#">Contact</Styled.FooterLink>
        </Styled.FooterLinks>
        <Styled.FooterCompanyName>Company Name © 2023</Styled.FooterCompanyName>
      </Styled.FooterLeft>
      <Styled.FooterCenter>
        <div>
          <BsPinMapFill className="icon" />
          <Styled.CenterText>
            <span>ElICE Lab</span> 서울 성동구 아차산로17길 48
          </Styled.CenterText>
        </div>
        <div>
          <BiPhoneCall className="icon" />
          <Styled.CenterText>+010-1234-8283</Styled.CenterText>
        </div>
        <div>
          <GrMail className="icon" />
          <Styled.CenterText>
            <a href="https://academy.elice.io/explore">contact@elice.io</a>
          </Styled.CenterText>
        </div>
      </Styled.FooterCenter>
      <Styled.FooterRight>
        <Styled.FooterCompanyAbout>
          <Styled.CompanyAboutSpan>
            About the samsamfarm
          </Styled.CompanyAboutSpan>
          SSF은 유저들끼리 연결되어 있는 인터넷으로 연결된 IoT 기기를 통해
          씨앗과 식물을 공유하는 플랫폼입니다. 함께 성장하고 공유하는 SSF에서
          당신의 초록 생활을 시작해보세요.
        </Styled.FooterCompanyAbout>
        <Styled.FooterIcons>
          <a href="https://www.facebook.com/elice.track">
            <AiFillFacebook className="iconLink" />
          </a>
          <a href="https://www.instagram.com/elice.track">
            <GrInstagram className="iconLink" />
          </a>
          <BsGithub className="iconLink" />
          <a href="https://kdt-gitlab.elice.io/iot_track/class_01/iot_project/team3">
            <AiFillGitlab className="iconLink" />
          </a>
        </Styled.FooterIcons>
      </Styled.FooterRight>
    </Styled.FooterContainer>
  );
};

export default Footer;
