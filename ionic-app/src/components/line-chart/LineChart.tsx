import { Line } from 'react-chartjs-2';
import styles from './line-chart.module.css';

/** Describe the purpose of the LineChart component here.*/

type IProps = {
  dataPoints: number[];
  graphTitle: string;
  className?: string;
};

const LineChart: React.FC<IProps> = ({ dataPoints, graphTitle, className }) => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'f(x)=x+10',
        data: [11, 12, 13, 14, 15, 16],
        fill: false,
        backgroundColor: 'rgb(148,16,126)',
        borderColor: 'rgba(9,67,131,0.2)',
      },
      {
        label: 'Din funktion',
        data: dataPoints,
        fill: false,
        backgroundColor: 'rgb(255,187,99)',
        borderColor: 'rgba(178,187,9,0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className={`${className} ${styles.container}`}>
      <Line data={data} options={options} />
    </div>
  );
};
export default LineChart;
