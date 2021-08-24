import { IonSelect, IonSelectOption } from '@ionic/react';
import styles from './x-plus-ten.module.css';
import LineChart from '../../../line-chart/LineChart';
import { useState } from 'react';

const XPlusTen: React.FC = () => {
  const [selectInput, setSelectInput] = useState('');
  const [input, setInput] = useState('');

  return (
    <div className="p-1 w-full h-full items-center">
      <div className={`${styles.questionContainer} m-auto rounded`}>
        <h4> Konstruer et funktionsudtryk hvor alle funktionens y-værdierne er større end 10. </h4>
      </div>

      <div className="flex flex-row justify-around mt-1">
        <div>
          <div className={`${styles.functionBuilderContainer} flex items-center rounded px-1 mt-3`}>
            <p className="mr-1">f(x) = x</p>
            <div className={styles.vl} />
            <IonSelect className="mx-1" onIonChange={(e) => setSelectInput(e.detail.value)}>
              <IonSelectOption value="+">{`+`}</IonSelectOption>
              <IonSelectOption value="-">{`-`}</IonSelectOption>
              <IonSelectOption value="*">{`*`}</IonSelectOption>
              <IonSelectOption value="/">{`/`}</IonSelectOption>
            </IonSelect>
            <div className={styles.vl} />
            <input className="ml-1 p-05" value={input} onChange={(e) => setInput(e.target.value)} />
          </div>
          {selectInput && input && (
            <div className="flex mt-2 justify-center">
              <p>Dit svar:</p>
              <h3 className="ml-2">{`f(x) = x ${selectInput} ${input}`}</h3>
            </div>
          )}
        </div>
        {input && <LineChart className="mt-1" />}
      </div>
    </div>
  );
};
export default XPlusTen;
