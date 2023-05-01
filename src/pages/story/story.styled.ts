import styled from 'styled-components';
import street from '../../../public/asset/스타벅스.gif';

export const Introduce_backgroundImg = styled.div`
  background-image: url(${street});
  background-size: 100% 100%;
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
`;

export const Introduce_Script = styled.div`
  width: 100%;
  display: flex;
`;

export const Introduce_span = styled.span`
  margin-left: 30%;
  margin-top: 5%;
`;

export const Introduce_button = styled.button`
  font-size: 1.5em;
`;
