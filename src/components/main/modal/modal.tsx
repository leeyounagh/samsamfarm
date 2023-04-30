import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Styled from "./modal.styled";
import { GrClose } from "react-icons/gr";
import { MainType } from "../../../type/type";
import MainCharacter from "../../../data/mainCharacter";

type ModalType = {
  isMainModalOpen?: boolean;
  setIsMainModalOpen?: Dispatch<SetStateAction<boolean>>;
  mainData?: MainType[];
  userId?: number;
};

export default function Modal({
  isMainModalOpen,
  setIsMainModalOpen,
  mainData,

  userId,
}: ModalType) {
  const [userInfo, setUserInfo] = useState<MainType>({
    visiter_id: 0,
    contents: "asfdasd",
    writer: "dsfasd",
    create_at: "fdsaf",
    delete_at: "dasfdas",
    plants_id: 1,
  });

  useEffect(() => {
    if (mainData && userId) {
      setUserInfo(mainData[userId]);
    }
  }, [mainData, userId, setUserInfo]);

  const plantsRenderer = (id: number | undefined = userInfo?.plants_id) => {
    interface PlantMapper {
      [key: string]: JSX.Element | undefined;
    }

    const mapper: PlantMapper = {
      "1": <Styled.HomePlantImg src="./asset/씨앗.png" id="plants" />,
      "2": <Styled.HomePlantImg src="./asset/새싹.png" id="plants" />,
      "3": <Styled.HomePlantImg src="./asset/중간새싹.png" id="plants" />,
      "4": <Styled.HomePlantImg src="./asset/꽃.png" id="plants" />,
    };

    // id가 undefined일 경우 default 값을 반환하도록 설정
    return mapper[id !== undefined ? `${id}` : "4"];
  };
  return (
    <Styled.Layout>
      <Styled.CloseDiv>
        <GrClose
          size={50}
          onClick={() => {
            if (setIsMainModalOpen) {
              setIsMainModalOpen(!isMainModalOpen);
            }
          }}
        />
      </Styled.CloseDiv>

      <Styled.FarmDiv>
        <Styled.FarmModalDiv>
          {MainCharacter && userId !== undefined ? (
            <Styled.CharacterImg
              src={
                MainCharacter[userId]
                  ? String(MainCharacter[userId]?.img)
                  : "./asset/곰돌이.gif"
              }
              width="40%"
              height="80%"
            />
          ) : null}
          <Styled.HomeTitleDiv>
            <h1>이준기님의 농장</h1>
          </Styled.HomeTitleDiv>
          <Styled.GridImg src="./asset/밭누끼.png" width="100%" height="100%" />

          {plantsRenderer(userInfo?.plants_id)}
          <Styled.PaymentImg src="./asset/돈.gif" width="80px" height="80px" />
        </Styled.FarmModalDiv>
      </Styled.FarmDiv>

      <Styled.CommentDiv>
        <Styled.CommentInputDiv>
          <Styled.CommentInput />
          <Styled.CommentBtn>댓글 달기</Styled.CommentBtn>
        </Styled.CommentInputDiv>
        <Styled.CommentAreaDiv>
          {Array.from({ length: 8 })
            .fill(0)
            .map(() => {
              return (
                <div style={{ display: "flex" }}>
                  <Styled.CommentListDiv>fdafdsads</Styled.CommentListDiv>
                  <Styled.CommentUserDiv>작성자: 이수연</Styled.CommentUserDiv>
                </div>
              );
            })}
        </Styled.CommentAreaDiv>
      </Styled.CommentDiv>
    </Styled.Layout>
  );
}
