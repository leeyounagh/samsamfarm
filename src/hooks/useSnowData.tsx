import { useCallback, useEffect, useState } from "react";

interface SnowData {
  x: number; // 눈의 x좌표
  y: number; // 눈의 y좌표
  speedOfFall: number; // 눈의 낙하 속도
  speedOfWind: number; // 눈발의 속도
  step: number; // 바람의 방향
}

const useSnowData = (count: number): [SnowData[]] => {
  const [snowDatas, setSnowDatas] = useState<SnowData[]>([]);

  const updateSnowData = useCallback(
    (datas: SnowData[]) =>
      datas.map((data) => {
        const { x, y, speedOfWind, step } = data;
        const newX = x + Math.cos(speedOfWind);
        const newY = y + speedOfWind;
        let speedOfFall = data.speedOfFall;

        const isOutOfBounds =
          newY >= window.innerHeight - 60 ||
          newX >= window.innerWidth - 50 ||
          newX <= 0;
        const shouldResetX = isOutOfBounds;

        const updatedX = shouldResetX
          ? isOutOfBounds
            ? Math.floor(Math.random() * window.innerWidth)
            : newX < 0
            ? 50
            : window.innerWidth - 50
          : newX;
        const updatedY = isOutOfBounds ? 0 : newY;
        const updatedSpeedOfWind = shouldResetX
          ? speedOfWind + step
          : speedOfWind;

        if (isOutOfBounds) {
          speedOfFall = Math.random() * 2 + 2;
        }

        return {
          x: updatedX,
          y: updatedY,
          speedOfFall,
          speedOfWind: updatedSpeedOfWind,
          step,
        };
      }),
    []
  );

  const setSnowPosition = useCallback(() => {
    setSnowDatas((state) => updateSnowData(state));
  }, [updateSnowData]);

  useEffect(() => {
    const datas: SnowData[] = Array.from({ length: count }, () => ({
      x: Math.floor(Math.random() * window.innerWidth - 10),
      y: Math.floor(Math.random() * window.innerHeight + 10),
      speedOfFall: Math.random() * 2 + 2,
      speedOfWind: 1,
      step: Math.random() * 0.1 + 0.05,
    }));
    setSnowDatas(datas);
  }, [count]);

  useEffect(() => {
    const fall = setInterval(setSnowPosition, 50);
    return () => {
      clearInterval(fall);
    };
  }, [setSnowPosition]);

  return [snowDatas];
};

export default useSnowData;
