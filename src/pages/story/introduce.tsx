import * as Styled from './story.styled';

export default function Introduce() {
  const title1 = '비가 추적추적 내린다.\n 식물을 키우기 좋은 날 이군 식물 키우러 가볼까?';
  const yes = '좋아!';
  const no = '싫어';

  return (
    <div>
      <Styled.Introduce_backgroundImg />
      <Styled.Introduce_Script>
        <p style={{ fontSize: '1.8em' }}>{title1}</p>
        <Styled.Introduce_span>
          <Styled.Introduce_button type="submit">{yes}</Styled.Introduce_button>
          <Styled.Introduce_button type="submit">{no}</Styled.Introduce_button>
        </Styled.Introduce_span>
      </Styled.Introduce_Script>
    </div>
  );
}
