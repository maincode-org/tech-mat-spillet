import styles from './code-editor.module.css';
import CodeHighlighter from '../highlighter/CodeHighlighter';
import { IonChip, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';

type IProps = {
  codeSnippet: string;
  options: string[];
  correctAnswer: string;
  className?: string;
};

const CodeEditor: React.FC<IProps> = ({ codeSnippet, options, correctAnswer, className }) => {
  const [chosenAnswer, setChosenAnswer] = useState<string[]>(correctAnswer.split('').map(() => '_'));
  const [code, setCode] = useState(codeSnippet);

  useEffect(() => {
    const newCode = code.replace(/@(.*)@/g, `@(${chosenAnswer.reduce((acc, cur) => acc + cur, '')})@`);
    setCode(newCode);
  }, [chosenAnswer, setCode]);

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

  const isUserInputCorrect = (userInput: string, correctAnswer: string) => userInput === correctAnswer;

  return (
    <div className={className}>
      {chosenAnswer.toString().replace(/,/g, '').replace(/_/g, '').length === correctAnswer.length && (
        <div className={styles.correctAnswerContainer}>
          <span className="w-full h-full">
            {isUserInputCorrect(
              chosenAnswer.reduce((acc, cur) => acc + cur, ''),
              correctAnswer
            )
              ? '✓'
              : '🗙'}
          </span>
        </div>
      )}
      <div className={`${styles.codeContainer} card-shadow rounded`}>
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
export default CodeEditor;
