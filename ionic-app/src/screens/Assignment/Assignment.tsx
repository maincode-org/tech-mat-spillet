import { IonContent, IonPage, IonSelect, IonSelectOption } from '@ionic/react';
import styles from './assignment.module.css';
import LineChart from '../../components/line-chart/LineChart';
import { useState } from 'react';

const Assignment: React.FC = () => {
  const [selectInput, setSelectInput] = useState('');
  const [input, setInput] = useState('');

  return (
    <IonPage>
      <IonContent>
        <div className="p-1 w-full h-full flex flex-col items-center">
          <div className={`${styles.questionContainer} rounded`}>
            <h4> Skriv en funktion hvor alle funktionens y-værdierne er større end 10. </h4>
          </div>
          <br />
          <br />

          <div className="flex">
            <p>f(x) = x</p>
            <IonSelect className="ml-2" onIonChange={(e) => setSelectInput(e.detail.value)}>
              <IonSelectOption value={'>'}>{`>`}</IonSelectOption>
              <IonSelectOption value={'<'}>{`<`}</IonSelectOption>
              <IonSelectOption value={'>='}>{`>=`}</IonSelectOption>
              <IonSelectOption value={'<='}>{`<=`}</IonSelectOption>
            </IonSelect>
            <input value={input} onChange={(e) => setInput(e.target.value)} className="ml-2 p-05" />
          </div>
          {selectInput && input && (
            <div className="flex mt-2 justify-center">
              <p>Din funktion:</p>
              <h3 className="ml-2">{`f(x) = x ${selectInput} ${input}`}</h3>
            </div>
          )}
          {input && <LineChart className="mt-5" />}
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Assignment;
