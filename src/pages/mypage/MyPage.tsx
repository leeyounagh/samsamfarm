import React from "react";
import * as Styled from "./mypage.styled";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { TbArrowBigDownFilled } from "react-icons/tb";

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
                <Styled.IconImg src="./asset/온도계.png" />
                <Styled.StatusDiv>
                  <TbArrowBigUpFilled size={30} />
                  10
                  <TbArrowBigDownFilled size={30} />
                </Styled.StatusDiv>
              </Styled.IconDiv>
              <Styled.IconDiv>
                <Styled.IconImg src="./asset/땅.png" />
                <Styled.StatusDiv>
                  <TbArrowBigUpFilled size={30} />
                  10 <TbArrowBigDownFilled size={30} />
                </Styled.StatusDiv>
              </Styled.IconDiv>
              <Styled.IconDiv>
                <Styled.IconImg src="./asset/태양.png" />
                <Styled.StatusDiv>
                  {" "}
                  <TbArrowBigUpFilled size={30} />
                  10
                  <TbArrowBigDownFilled size={30} />
                </Styled.StatusDiv>
              </Styled.IconDiv>
              <Styled.IconDiv>
                <Styled.IconImg src="./asset/물방울.png" />
                <Styled.StatusDiv>
                  {" "}
                  <TbArrowBigUpFilled size={30} />
                  10
                  <TbArrowBigDownFilled size={30} />
                </Styled.StatusDiv>
              </Styled.IconDiv>
            </Styled.IconBoardDiv>
          </Styled.IconBoardLayout>
        </Styled.SensorIconDiv>
      </Styled.BoardDiv>
    </Styled.Layout>
  );
}
