import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import * as Styled from "./modal.styled";
import { MainType } from "../../../types";
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
    const CommentList: ContentType[] = [];
    console.log(isMainModalOpen);
    guestBookData?.map((item: ContentType) => {
      if (Number(item.ownerId) === userId) {
        CommentList.push(item);
      }
    });
    return guestBook ? CommentList : [];
  };

  const [content, setContent] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [commentList, setCommentList] = useState(getInitialGuestBook());
  const correctUserId = MainCharacter && userId !== undefined;
  const restData = mainData && userId !== undefined;
  useEffect(() => {
    getInitialGuestBook();
  }, []);

  const plantsRenderer = (id: number | string) => {
    const mapper: PlantMapper = {
      "1": <Styled.HomePlantImg src="/asset/씨앗.png" id="plants" />,
      "2": <Styled.HomePlantImg src="/asset/새싹.png" id="plants" />,
      "3": <Styled.HomePlantImg src="/asset/중간새싹.png" id="plants" />,
      "4": <Styled.HomePlantImg src="/asset/2번꽃.png" id="plants" />,
    };

    return mapper[id !== undefined ? `${id}` : "4"];
  };

  const handleSubmit = () => {
    const guestBook = localStorage.getItem("guestbook");
    const guestBookData = guestBook ? JSON.parse(guestBook) : [];
    const newArr: any = [];
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

    guestBookData.push(body);

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
            src="/asset/closebtn.png"
            style={{ marginRight: "50px" }}
            width="50px"
            height="50px"
            alt="버튼"
          />
        </Styled.CloseDiv>

        <Styled.GridLayout>
          {correctUserId && (
            <Styled.CharacterImg
              src={
                MainCharacter[userId]
                  ? String(MainCharacter[userId]?.img)
                  : "/asset/곰돌이.gif"
              }
              width="40%"
              height="80%"
            />
          )}
          <Styled.GridDiv>
            {plantsRenderer(restData ? mainData[userId]?.current_grade : 1)}
          </Styled.GridDiv>
        </Styled.GridLayout>
      </Styled.FieldDiv>
      <Styled.CommentLayout onSubmit={handleSubmit}>
        <Styled.UserInfoDiv>
          <h1>{restData ? `${mainData[userId]?.nickname}님 농장` : ""}</h1>
        </Styled.UserInfoDiv>

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
          {commentList?.length !== 0 &&
            commentList?.map((item: ContentType) => {
              return (
                <>
                  <Styled.CommentDiv>
                    <Styled.Comment>{item.content}</Styled.Comment>
                    <Styled.Writer>작성자: {item.writer}</Styled.Writer>
                  </Styled.CommentDiv>
                </>
              );
            })}
        </Styled.CommentArea>
      </Styled.CommentLayout>
    </Styled.Layout>
  );
}
