import { Dispatch, SetStateAction } from "react";
import * as Styled from "./modal.styled";
import { MainType } from "../../../type/type";
import MainCharacter from "../../../data/mainCharacter";
import useMediaQuery from "../../../hooks/useMediaQuery";

type ModalType = {
  isMainModalOpen?: boolean;
  setIsMainModalOpen?: Dispatch<SetStateAction<boolean>>;
  mainData?: MainType[];
  userId?: number;
};

interface PlantMapper {
  [key: string]: JSX.Element | undefined;
}

export default function Modal({
  isMainModalOpen,
  setIsMainModalOpen,
  mainData,
  userId,
}: ModalType) {
  const mobileSize = useMediaQuery("(max-width: 768px)");

  const plantsRenderer = (id: number) => {
    const mapper: PlantMapper = {
      "1": <Styled.HomePlantImg src="./asset/씨앗.png" id="plants" />,
      "2": <Styled.HomePlantImg src="./asset/새싹.png" id="plants" />,
      "3": <Styled.HomePlantImg src="./asset/중간새싹.png" id="plants" />,
      "4": <Styled.HomePlantImg src="./asset/꽃.png" id="plants" />,
    };

    return mapper[id !== undefined ? `${id}` : "4"];
  };
  return (
    <Styled.Layout>
      <Styled.FieldDiv>
        <Styled.CloseDiv
          onClick={() => {
            if (setIsMainModalOpen) {
              setIsMainModalOpen(!isMainModalOpen);
            }
          }}
        >
          <img
            src="./asset/closebtnblack.png"
            style={{ marginRight: "50px" }}
            width="50px"
            height="50px"
            alt="버튼"
          />
        </Styled.CloseDiv>

        <Styled.GridLayout>
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
          <Styled.GridDiv>
            {plantsRenderer(
              mainData && userId !== undefined ? mainData[userId].plants_id : 1
            )}
          </Styled.GridDiv>
        </Styled.GridLayout>
      </Styled.FieldDiv>
      <Styled.CommentLayout>
        <Styled.CommentDiv>
          <Styled.CommentInput placeholder="댓글을 작성해 주세요...." />
          <Styled.CommentBtn>댓글 작성</Styled.CommentBtn>
        </Styled.CommentDiv>
        <Styled.CommentArea>
          <Styled.CommentDiv>
            <Styled.Comment>잘 놀다 갑니다~~~~</Styled.Comment>
            <Styled.Writer>작성자: 온호성</Styled.Writer>
          </Styled.CommentDiv>
        </Styled.CommentArea>
      </Styled.CommentLayout>
    </Styled.Layout>
  );
}
