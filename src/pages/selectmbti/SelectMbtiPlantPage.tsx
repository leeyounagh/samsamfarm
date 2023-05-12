// import * as Styled from './story.styled';
import { useNavigate } from 'react-router-dom';
interface mbtiRouteState {
  mbtiState: string;
}

export default function SelectMbtiPlantPage() {
  const navigate = useNavigate();
  const mbtiClickHandler = (mbti: string) => {
    console.log(mbti);
    const params: mbtiRouteState = { mbtiState: mbti };

    navigate(`/plantDescriptionPage`, { state: params });
  };
  return (
    <div>
      <table>
        <tr>
          <td>
            <button className="mbti-btn" value="INTJ" onClick={() => mbtiClickHandler('INTJ')}>
              INTJ
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="INTP" onClick={() => mbtiClickHandler('INTP')}>
              INTP
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="INFJ" onClick={() => mbtiClickHandler('INFJ')}>
              INFJ
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="INFP" onClick={() => mbtiClickHandler('INFP')}>
              INFP
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="mbti-btn" value="ISTJ" onClick={() => mbtiClickHandler('ISTJ')}>
              ISTJ
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="ISTP" onClick={() => mbtiClickHandler('ISTP')}>
              ISTP
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="ISFJ" onClick={() => mbtiClickHandler('ISFJ')}>
              ISFJ
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="ENTJ" onClick={() => mbtiClickHandler('ENTJ')}>
              ENTJ
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="mbti-btn" value="ISFP" onClick={() => mbtiClickHandler('ISFP')}>
              ISFP
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="ENTP" onClick={() => mbtiClickHandler('ENTP')}>
              ENTP
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="ENFJ" onClick={() => mbtiClickHandler('ENFJ')}>
              ENFJ
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="ENFP" onClick={() => mbtiClickHandler('ENFP')}>
              ENFP
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="mbti-btn" value="ESTJ" onClick={() => mbtiClickHandler('ESTJ')}>
              ESTJ
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="ESTP" onClick={() => mbtiClickHandler('ESTP')}>
              ESTP
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="ESFJ" onClick={() => mbtiClickHandler('ESFJ')}>
              ESFJ
            </button>
          </td>
          <td>
            <button className="mbti-btn" value="ESFP" onClick={() => mbtiClickHandler('ESFP')}>
              ESFP
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
