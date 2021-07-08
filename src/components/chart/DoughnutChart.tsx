import { Doughnut } from "react-chartjs-2";
import './doughnut-chart.css';

export type IUnknownObject = Record<string, any>[];

type IData = {
    labels: string[],
    datasets: IDataSets[];
}
type IDataSets = {
    label: string;
    backgroundColor: string[];
    borderColor: string[];
    data: (IUnknownObject | number)[];
    borderWidth: number;
}

type IProps = {
    height?: number;
    width?: number;
    data: IData;
}

const DoughnutChart: React.FC<IProps> = ({height, width, data}) => {
    return (
        <div className="chart-container">
            <h1>Dine skills</h1>
            <Doughnut width={height} height={width} type="doughnut" data={data}/>
        </div>
    );
}
export default DoughnutChart;