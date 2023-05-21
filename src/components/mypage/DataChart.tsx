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
import { RootState } from "../../store";
import { DataType } from "../../types";

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
  const deviceData = useSelector((state: RootState) => state.data);
  const currentStatus = useSelector((state: RootState) => {
    return state.status;
  });

  const timeTable = deviceData.reduce((cur: string[], acc: DataType) => {
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
        text: "최근 1분간격 수치 그래프",
      },
    },
  };

  const data = {
    labels: timeTable,
    datasets: [
      {
        label: "수치",
        data: deviceData?.map((item: DataType) => {
          if (currentStatus === 0) {
            return item.temperature;
          }
          if (currentStatus === 1) {
            return item.bright;
          }
          if (currentStatus === 2) {
            return item.humid;
          }
          if (currentStatus === 3) {
            return item.moisture;
          }
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Styled.Layout>
      <Line options={options} data={data} />;
    </Styled.Layout>
  );
}
