import { IonContent, IonPage, IonChip, IonLabel } from '@ionic/react';
import styles from './assignment-two.module.css';
import { useState } from 'react';

const AssignmentTwo: React.FC = () => {
  const [chosenAnswer, setChosenAnswer] = useState<string[]>([]);

  const code = `funktion erPunktetGyldigt(x, y) { 
     hvis ( ${!chosenAnswer?.[0] ? '________' : chosenAnswer.reduce((acc, cur) => acc + cur, '')} ) {
     returner sandt; 
     } ellers {
     returner falsk;  }}`;

  const options = ['x', 'y', '+', '-', '>', '<', '=', '1', '10', '9'];

  return (
    <IonPage>
      <IonContent>
        <div className="p-1 w-full h-full flex flex-col items-center">
          <div className={`${styles.questionContainer} rounded`}>
            <h4> Konstruer en funktion som tager to parametre x og y, som returnere hvorvidt koordinatet (x,y) er et validt punkt på grafen fra før f(x)=x+10. </h4>
          </div>
          <div className={`${styles.codeContainer} mt-5 rounded`}>
            <p className="p-1">{code}</p>
          </div>

          <div className="mt-3">
            {options.map((o, i) => (
              <IonChip key={i} color="primary" onClick={(e) => setChosenAnswer([...chosenAnswer, o])}>
                <IonLabel>{o}</IonLabel>
              </IonChip>
            ))}
            <IonChip onClick={() => setChosenAnswer([...chosenAnswer.slice(0, chosenAnswer.length - 1)])}>
              <IonLabel>Fjern</IonLabel>
            </IonChip>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default AssignmentTwo;
