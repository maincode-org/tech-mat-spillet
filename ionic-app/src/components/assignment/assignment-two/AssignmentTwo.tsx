import { IonChip, IonLabel } from '@ionic/react';
import styles from './assignment-two.module.css';
import { useEffect, useState } from 'react';
import CodeHighlighter from '../../code/highlighter/CodeHighlighter';

const AssignmentTwo: React.FC = () => {
  const correctAnswer = 'y=x+10';
  const [chosenAnswer, setChosenAnswer] = useState<string[]>(correctAnswer.split('').map(() => '_'));
  const [code, setCode] = useState('');

  useEffect(() => {
    setCode(`
  funktion erPunktetGyldigt(x, y) { 
     hvis ( <span class="letter-space">${chosenAnswer.reduce((acc, cur) => acc + cur, '')}</span>) {
        bliver det sandt;
     } ellers {
        bliver det falsk;
     }
  }`);
  }, [chosenAnswer, setCode]);

  const options = ['x', 'y', '+', '-', '>', '<', '=', '1', '0', '9'];

  const onClickHandler = (char: string) => {
    const parsedChosenAnswer = chosenAnswer.toString().replace(/,/g, '').replace(/_/g, '');
    if (correctAnswer.length <= parsedChosenAnswer.length) return;

    const answerState = [...chosenAnswer];
    answerState[parsedChosenAnswer.length] = char;
    setChosenAnswer(answerState);
  };

  const onDeleteHandler = () => {
    const parsedChosenAnswer = chosenAnswer.toString().replace(/,/g, '').replace(/_/g, '');
    if (parsedChosenAnswer.length === 0) return;

    const answerState = [...chosenAnswer];
    answerState[parsedChosenAnswer.length - 1] = '_';
    setChosenAnswer(answerState);
  };

  return (
    <div className="p-1 w-full h-full flex flex-col items-center rounded">
      <div className={`${styles.questionContainer} rounded`}>
        <h4> Konstruer en funktion som tager to parametre x og y, som returnerer hvorvidt koordinatet (x,y) er et validt punkt på grafen fra før f(x)=x+10. </h4>
      </div>
      <div className={`${styles.codeContainer} mt-3 rounded`}>
        <CodeHighlighter code={code} />
      </div>

      <div className="py-1 px-2 mt-3 glass-bg rounded">
        {options.map((o, i) => (
          <IonChip key={i} color="primary" onClick={() => onClickHandler(o)}>
            <IonLabel>{o}</IonLabel>
          </IonChip>
        ))}
        <IonChip className="ml-3" color="danger" onClick={() => onDeleteHandler()}>
          <IonLabel>Fjern</IonLabel>
        </IonChip>
      </div>
    </div>
  );
};
export default AssignmentTwo;
