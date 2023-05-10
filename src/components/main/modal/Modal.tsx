import { Dispatch, SetStateAction } from "react";
import * as Styled from "./modal.styled";
import { GrClose } from "react-icons/gr";
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
      {mobileSize ? (
        <Styled.FiledBackgroundImg src="./asset/후보3.gif" />
      ) : (
        <Styled.FiledBackgroundImg src="./asset/후보3.gif" />
      )}

      <Styled.CloseDiv>
        {mobileSize ? (
          <GrClose
            size={30}
            onClick={() => {
              if (setIsMainModalOpen) {
                setIsMainModalOpen(!isMainModalOpen);
              }
            }}
          />
        ) : (
          <GrClose
            size={50}
            onClick={() => {
              if (setIsMainModalOpen) {
                setIsMainModalOpen(!isMainModalOpen);
              }
            }}
          />
        )}
      </Styled.CloseDiv>

      <Styled.FieldDiv>
        {mobileSize ? (
          <Styled.FieldImg src="./asset/모달 농장.jpg" />
        ) : (
          <Styled.MobileFiledImg src="./asset/모달 농장.jpg" />
        )}

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
        <Styled.GridImg src="./asset/밭누끼.png" width="100%" height="100%" />
        {plantsRenderer(
          mainData && userId !== undefined ? mainData[userId].plants_id : 1
        )}
      </Styled.FieldDiv>
      <Styled.CommentLayout>
        <Styled.MobileCommentLayout>
          <Styled.MobileInput />
          <Styled.MobileBtn>댓글 등록</Styled.MobileBtn>
        </Styled.MobileCommentLayout>

        <h3>온호성: 잘놀다 갑니다~~~</h3>
      </Styled.CommentLayout>
    </Styled.Layout>
  );
}
