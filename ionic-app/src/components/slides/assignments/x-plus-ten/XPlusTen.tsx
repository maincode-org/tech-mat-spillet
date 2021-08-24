import styles from './x-plus-ten.module.css';
import LineChart from '../../../line-chart/LineChart';
import CodeEditor from '../../../code/editor/CodeEditor';
import { useState } from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

const XPlusTen: React.FC = () => {
  const [userInput, setUserInput] = useState('');

  const codeSnippetInput = `
    f(x) = <span class="letter-space">@(____)@</span>`;

  console.log('user input: ', userInput);

  return (
    <div className={`${styles.container} p-1 w-full h-full items-center`}>
      <div className={`${styles.questionContainer} m-auto rounded`}>
        <h4> Konstruer et funktionsudtryk hvor alle funktionens y-værdierne er større end 10. </h4>
      </div>

      <IonGrid>
        <IonRow>
          <IonCol size="3">
            <CodeEditor
              codeSnippet={codeSnippetInput}
              options={['x', 'y', '+', '-', '>', '<', '=', '1', '0', '9']}
              correctAnswer={'x+10'}
              onChange={(s) => setUserInput(s)}
              className="mt-3 relative"
            />
          </IonCol>
          <IonCol size="1">
            <div />
          </IonCol>
          <IonCol>
            {/* Calculate the y-values and provide them to dataPoints here */}
            <LineChart dataPoints={[]} graphTitle={`f(x)=${userInput}`} className="mt-1" />
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
export default XPlusTen;
