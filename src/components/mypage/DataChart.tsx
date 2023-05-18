import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import * as Styled from "./datachart.styled";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function DataChart() {
  const deviceData: any = useSelector((state) => {
    return state;
  });
  const currentStatus: any = useSelector((state) => {
    return state;
  });

  const timeTable = deviceData.data.reduce((cur: any, acc: any) => {
    return [...cur, acc.time];
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "최근 수치 그래프",
      },
    },
  };

  const data = {
    labels: timeTable,
    datasets: [
      {
        label: "수치",
        data: deviceData?.data?.map((item: any) => {
          if (currentStatus.status === 0) {
            return item.temperature;
          }
          if (currentStatus.status === 1) {
            return item.bright;
          }
          if (currentStatus.status === 2) {
            return item.humid;
          }
          if (currentStatus.status === 3) {
            return item.moisture;
          }
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  // 급해서 이방법을 썻지만... 끝나고 리팩토링 열심히 하겠습니다..
  return (
    <Styled.Layout>
      <Line options={options} data={data} />;
    </Styled.Layout>
  );
}
