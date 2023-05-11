import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import * as Styled from "./modal.styled";
import { MainType } from "../../../type/type";
import MainCharacter from "../../../data/mainCharacter";

type ModalType = {
  isMainModalOpen?: boolean;
  setIsMainModalOpen?: Dispatch<SetStateAction<boolean>>;
  mainData?: MainType[];
  userId?: number;
};

interface PlantMapper {
  [key: string]: JSX.Element | undefined;
}
interface ContentType {
  content: string;
  writer: string;
  ownerId: number;
}

export default function Modal({
  isMainModalOpen,
  setIsMainModalOpen,
  mainData,
  userId,
}: ModalType) {
  const getInitialGuestBook = () => {
    const guestBook = localStorage.getItem("guestbook");
    const guestBookData = guestBook ? JSON.parse(guestBook) : [];
    const getCommentList: any[] = [];
    guestBookData?.map((item: any) => {
      if (Number(item.ownerId) === userId) {
        getCommentList.push(item);
      }
    });
    return guestBook ? getCommentList : [];
  };
  const [content, setContent] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [commentList, setCommentList] = useState(getInitialGuestBook());
  useEffect(() => {
    getInitialGuestBook();
  }, []);
  const plantsRenderer = (id: number) => {
    const mapper: PlantMapper = {
      "1": <Styled.HomePlantImg src="./asset/씨앗.png" id="plants" />,
      "2": <Styled.HomePlantImg src="./asset/새싹.png" id="plants" />,
      "3": <Styled.HomePlantImg src="./asset/중간새싹.png" id="plants" />,
      "4": <Styled.HomePlantImg src="./asset/꽃.png" id="plants" />,
    };

    return mapper[id !== undefined ? `${id}` : "4"];
  };
  const handleSubmit = () => {
    const body = {
      content: content,
      writer: writer,
      ownerId: userId,
    };
    if (body.content.length === 0 || body.writer.length === 0) {
      alert("값을 모두 입력해주셔야됩니다.");
      setWriter("");
      setContent("");
      return;
    }
    const guestBook = localStorage.getItem("guestbook");
    const guestBookData = guestBook ? JSON.parse(guestBook) : [];
    guestBookData.push(body);
    const newArr: any = [];
    newArr.concat(body);
    setCommentList(newArr);
    setWriter("");
    setContent("");

    localStorage.setItem("guestbook", JSON.stringify(guestBookData));
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
      <Styled.CommentLayout onSubmit={handleSubmit}>
        <Styled.CommentDiv>
          <Styled.CommentInput
            placeholder="댓글을 작성해 주세요...."
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setContent(event.target.value)
            }
          />
          <Styled.WriterInput
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setWriter(event.target.value)
            }
            placeholder="작성자"
          />
          <Styled.CommentBtn type="submit">댓글 작성</Styled.CommentBtn>
        </Styled.CommentDiv>
        <Styled.CommentArea>
          {commentList?.length !== 0
            ? commentList?.map((item: ContentType) => {
                return (
                  <>
                    <Styled.CommentDiv>
                      <Styled.Comment>{item.content}</Styled.Comment>
                      <Styled.Writer>작성자: {item.writer}</Styled.Writer>
                    </Styled.CommentDiv>
                  </>
                );
              })
            : null}
        </Styled.CommentArea>
      </Styled.CommentLayout>
    </Styled.Layout>
  );
}
