import React, { useState } from "react";
import * as Styled from "./main.styled";
import Modal from "./modal/modal";

export default function MainField() {
  const [isMainModalOpen, setIsMainModalOpen] = useState<boolean>(false);

  return (
    <Styled.Layout>
      <Styled.BackGroundImg src="./asset/배경.png" />

      <Styled.FieldLayOut>
        {Array.from({ length: 8 })
          .fill(0)
          .map((item) => {
            return (
              <>
                {" "}
                <Styled.FieldDiv id="item">
                  {" "}
                  <Styled.TitleDiv>
                    <button
                      onClick={() => {
                        setIsMainModalOpen(!isMainModalOpen);
                      }}
                    >
                      놀러가기
                    </button>
                  </Styled.TitleDiv>
                </Styled.FieldDiv>
              </>
            );
          })}
        {/* 유저 데이터 받으면 상태값에 따라 렌더링하는 조건문 추가예정 */}
        <Styled.Plant1Img src="./asset/씨앗.png" width="50px" height="50px" />
        <Styled.Plant2Img
          src="./asset/중간새싹.png"
          width="50px"
          height="50px"
        />
        <Styled.Plant3Img src="./asset/선인장.png" width="70px" height="70px" />
        <Styled.Plant4Img src="./asset/꽃.png" width="70px" height="70px" />
        <Styled.Plant5Img src="./asset/장미.png" width="70px" height="70px" />
        <Styled.Plant6Img src="./asset/5번꽃.png" width="70px" height="70px" />

        <Styled.Plant7Img src="./asset/2번꽃.png" width="70px" height="70px" />
        <Styled.Plant8Img
          src="./asset/해바라기.png"
          width="50px"
          height="50px"
        />
        <Styled.Character1Img
          src="./asset/시나몬롤.gif"
          width="70px"
          height="70px"
        />
        <Styled.Character2Img
          src="./asset/운동 햄토리.gif"
          width="70px"
          height="70px"
        />
        <Styled.Character3Img
          src="./asset/키티1.gif"
          width="70px"
          height="70px"
        />
        <Styled.Character4Img src="./asset/뮤.gif" width="70px" height="70px" />
        <Styled.Character5Img
          src="./asset/햄토리.gif"
          width="70px"
          height="70px"
        />
        <Styled.Character6Img
          src="./asset/님피아.gif"
          width="70px"
          height="70px"
        />
        <Styled.Character7Img
          src="./asset/스펀지밥.gif"
          width="70px"
          height="70px"
        />
        <Styled.Character8Img
          src="./asset/전설포켓몬.gif"
          width="70px"
          height="70px"
        />
        <Styled.Tree1Img src="./asset/나무.png" width="70px" height="70px" />
        <Styled.Tree2Img src="./asset/나무.png" width="70px" height="70px" />
        <Styled.Tree3Img src="./asset/나무.png" width="70px" height="70px" />
        <Styled.Tree4Img src="./asset/나무.png" width="70px" height="70px" />
      </Styled.FieldLayOut>
      {isMainModalOpen ? (
        <Modal
          isMainModalOpen={isMainModalOpen}
          setIsMainModalOpen={setIsMainModalOpen}
        />
      ) : null}
    </Styled.Layout>
  );
}
