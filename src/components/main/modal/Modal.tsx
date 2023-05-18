import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
  useEffect,
  SyntheticEvent,
} from "react";
import * as Styled from "./modal.styled";
import { MainType } from "../../../types";
import MainCharacter from "../../../data/mainCharacter";
import AxiosInstance from "../../../api/AxiosIntance";

type ModalType = {
  isMainModalOpen?: boolean;
  setIsMainModalOpen?: Dispatch<SetStateAction<boolean>>;
  mainData?: MainType[];
  characterId?: number;
  userId: number;
};

interface PlantMapper {
  [key: string]: JSX.Element | undefined;
}
interface ContentType {
  content: string;
  user_id: number;
  writer: string;
}

export default function Modal({
  isMainModalOpen,
  setIsMainModalOpen,
  mainData,
  characterId,
  userId,
}: ModalType) {
  const [content, setContent] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [commentList, setCommentList] = useState<ContentType[]>([
    {
      content: "안뇽",
      user_id: 1,
      writer: "호성",
    },
  ]);
  const correctUserId = MainCharacter && characterId !== undefined;
  const restData = mainData && characterId !== undefined;

  useEffect(() => {
    const getGuestBook = async () => {
      try {
        const response = await AxiosInstance.get(`/guestBook/${userId}`);
        const { data } = await response.data;
        setCommentList(data);
      } catch (err) {
        console.log(err);
      }
    };
    getGuestBook();
  }, [userId]);

  const plantsRenderer = (id: number | string) => {
    const mapper: PlantMapper = {
      "1": <Styled.HomePlantImg src="/asset/씨앗.png" id="plants" />,
      "2": <Styled.HomePlantImg src="/asset/새싹.png" id="plants" />,
      "3": <Styled.HomePlantImg src="/asset/중간새싹.png" id="plants" />,
      "4": <Styled.HomePlantImg src="/asset/2번꽃.png" id="plants" />,
    };

    return mapper[id !== undefined ? `${id}` : "4"];
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const body = {
      user_id: userId,
      content: content,
      writer: writer,
    };

    if (body.content.length === 0 || body.writer.length === 0) {
      alert("값을 모두 입력해주셔야됩니다.");
      setWriter("");
      setContent("");
      return;
    }
    try {
      const response = await AxiosInstance.post("/guestBook", body);
      if (response.status === 200) {
        alert("댓글이 작성되었습니다.");
        setWriter("");
        setContent("");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
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
                MainCharacter[characterId]
                  ? String(MainCharacter[characterId]?.img)
                  : "/asset/곰돌이.gif"
              }
              width="40%"
              height="80%"
            />
          )}
          <Styled.GridDiv>
            {plantsRenderer(
              restData ? mainData[characterId]?.current_grade : 1
            )}
          </Styled.GridDiv>
        </Styled.GridLayout>
      </Styled.FieldDiv>
      <Styled.CommentLayout onSubmit={handleSubmit}>
        <Styled.UserInfoDiv>
          <h1>{restData ? `${mainData[characterId]?.nickname}님 농장` : ""}</h1>
        </Styled.UserInfoDiv>

        <Styled.CommentDiv>
          <Styled.CommentInput
            value={content}
            placeholder="댓글을 작성해 주세요...."
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setContent(event.target.value)
            }
          />
          <Styled.WriterInput
            value={writer}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setWriter(event.target.value)
            }
            placeholder="작성자"
          />
          <Styled.CommentBtn type="submit">댓글 작성</Styled.CommentBtn>
        </Styled.CommentDiv>
        <Styled.CommentArea>
          {commentList &&
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
