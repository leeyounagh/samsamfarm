import * as Styled from "./mypage.styled";

export default function MyPage() {
  return (
    <Styled.Layout>
      <Styled.BoardDiv>
        <Styled.BearDiv>
          <Styled.BearImg src="./asset/곰돌이.gif" />
        </Styled.BearDiv>
        <Styled.SensorIconDiv>
          <Styled.IconBoardLayout>
            <Styled.IconBoardDiv>
              <Styled.IconDiv>
                <Styled.IconImg src="./asset/temperature.png" />
              </Styled.IconDiv>
              <Styled.IconDiv>
                <Styled.IconImg src="./asset/태양.png" />
                <Styled.StatusDiv></Styled.StatusDiv>
              </Styled.IconDiv>
              <Styled.IconDiv>
                <Styled.IconImg src="./asset/물방울.png" />
              </Styled.IconDiv>
            </Styled.IconBoardDiv>
          </Styled.IconBoardLayout>
        </Styled.SensorIconDiv>
      </Styled.BoardDiv>
    </Styled.Layout>
  );
}
