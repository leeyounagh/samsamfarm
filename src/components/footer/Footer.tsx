import * as Styled from "./footer.styled";
import FooterLogo from "../../../public/logo/FtLogo.png";

const Footer: React.FC = () => {
  return (
    <Styled.FooterContainer>
      <Styled.Footerbox>
        <Styled.FooterLogo src={FooterLogo} alt="로고" />

        <Styled.FooterText>
          <ul>
            <li>© 2023 SamSamFarm Co. All rights reserved. | Privacy Policy</li>
            <li>Tel:010-1234-5678 Email : amu@mail.com</li>
            <li>대표 : Jeon We</li>
          </ul>
        </Styled.FooterText>
      </Styled.Footerbox>
    </Styled.FooterContainer>
  );
};

export default Footer;
