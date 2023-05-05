import { useNavigate, useLocation } from 'react-router-dom';
import * as mbti from './mbti.json';

interface mbtiRouteState {
  mbtiState: string;
}
interface mbtiDocs {
  description: string;
}

export default function PlantDesriptionPage() {
  const navigate = useNavigate();
  const state: mbtiRouteState = useLocation<mbtiRouteState>().state;
  // console.log(state);
  const yesClickHandler = () => {
    navigate(`/accessPage`);
  };
  const NoClickHandler = () => {
    navigate(`/accessPage`);
  };
  const mbtiDocs: object = mbti[state.mbtiState as keyof typeof mbti];
  // const docs = JSON.parse(mbtiDocs as mbtiDocs);
  return (
    <div>
      <div>이미지</div>
      <div>글{mbtiDocs.description}</div>
      <div>선택1</div>
      <div>선택2</div>
    </div>
  );
}
