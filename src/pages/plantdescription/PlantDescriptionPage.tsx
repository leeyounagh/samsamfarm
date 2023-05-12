import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { MbtiType } from "../../types";

export default function PlantDesriptionPage() {
  // const navigate = useNavigate();
  const [mbtiDesc, setMbtiDesc] = useState<MbtiType[]>([
    {
      mbti: "ISTJ",
      description:
        "사실을 바탕으로 사고하며 이들의 행동이나 결정 사항에 한 치의 의심을 사지 않는 현실주의자형ISTJ는 리얼리스트 보스턴 프리지아 (Boston Fern): 적극적이면서도 현실적인 ISTJ 유형에게 적합한 실내 식물입니다.",
    },
  ]);

  useEffect(() => {
    const getMbti = async () => {
      const response = await axios("mbti.json");
      const data = await response.data;
      setMbtiDesc(data);
    };
    getMbti();
  }, []);
  // 이런식으로 통신으로 axios로 데이터를 받아온후 처리하면 될것 같습니다!
  // story쪽 로직이 어떻게 되는지 모르지만, 이전 페이지에서 유저가 선택한 데이터를 redux로 받아와서,
  // 해당하는 mbti에 맞는 key값을 mbtiDesc에서 찾고, 그 값에 해당하는 로직을 렌더링 하면 될것 같아요!
  //  리덕스 세팅 관련하여 혹시라도 모르시는 부분 있으면 세팅 같이 도와드릴게요! 꼭 질문 부탁드립니다.

  // const yesClickHandler = () => {
  //   navigate(`/accessPage`);
  // };
  // const NoClickHandler = () => {
  //   navigate(`/accessPage`);
  // };

  return (
    <div>
      <div>{mbtiDesc[0].mbti}</div>
      <div>글</div>
      <div>선택1</div>
      <div>선택2</div>
    </div>
  );
}
