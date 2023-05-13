import { useCallback, useEffect, useState } from "react";

interface snowData {
  x: number; // 눈의 x좌표
  y: number; // 눈의 y좌표
  speedOfFall: number; // 눈의 낙하 속도
  speedOfWind: number; // 눈발의 속도
  step: number; // 바람의 방향
} //눈이 가지는 정보

const useSnowData = (count: number): [snowData[]] => {
  const [snowDatas, setSnowData] = useState<snowData[]>([]); //눈들의 배열
  const newSnowData = useCallback(
    (datas: snowData[]) =>
      datas.map((data) => {
        let x = data.x + Math.cos(data.speedOfWind);
        let y = data.y + data.speedOfWind;
        let speedOfWind = data.speedOfWind;
        let speedOfFall = data.speedOfFall;
        const step = data.step;
        if (y >= window.innerHeight - 60) {
          y = 0;
          x = Math.floor(Math.random() * window.innerWidth);
          speedOfFall = Math.random() * 2 + 2;
          speedOfWind = 1;
        }
        if (x > window.innerWidth - 50) {
          x = window.innerWidth - 50;
        } else if (x < 0) {
          x = 50;
          speedOfWind = speedOfWind + data.step;
        }
        return { x, y, speedOfFall, speedOfWind, step };
      }),
    []
  );
  // 눈들의 위치와 바람을 바꿔주는 함수

  const setSnowPosition = () => {
    setSnowData((state) => newSnowData(state));
  }; // 바뀐 정보를 적용하는 함수

  useEffect(() => {
    const datas: snowData[] = [];
    for (let i = 0; i < count; i++) {
      const data = {
        x: Math.floor(Math.random() * window.innerWidth - 10),
        y: Math.floor(Math.random() * window.innerHeight + 10),
        speedOfFall: Math.random() * 2 + 2,
        speedOfWind: 1,
        step: Math.random() * 0.1 + 0.05,
      };
      datas.push(data);
    }
    setSnowData(() => datas);
  }, []);
  // useEffect를 사용해서 count의 수 만큼 snowData생성, 랜더링을 줄이기 위해
  // 데이터를 다 만들고 한번에 넣기

  useEffect(() => {
    const fall = setInterval(setSnowPosition, 50);
    return () => {
      clearInterval(fall);
    };
  }, []);
  // setInterval로 매 초 상태 업데이트, 화면이 내려가면 clearInterval
  return [snowDatas];
};

export default useSnowData;
