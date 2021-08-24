import styles from './assignment.module.css';
import LineChart from '../../../line-chart/LineChart';
import CodeEditor from '../../../code/editor/CodeEditor';

const XPlusTen: React.FC = () => {
  const codeSnippetInput = `
    f(x) = <span class="letter-space">@(___)@</span>`;

  return (
    <div className="p-1 w-full h-full items-center">
      <div className={`${styles.questionContainer} m-auto rounded`}>
        <h4> Konstruer et funktionsudtryk hvor alle funktionens y-værdierne er større end 10. </h4>
      </div>

      <div className="flex flex-row justify-around mt-1">
        <div>
          <CodeEditor codeSnippet={codeSnippetInput} options={['x', 'y', '+', '-', '>', '<', '=', '1', '0', '9']} correctAnswer={'x+10'} className="mt-3 relative" />
        </div>
        <LineChart dataPoints={[]} graphTitle="" className="mt-1" />
      </div>
    </div>
  );
};
export default XPlusTen;
