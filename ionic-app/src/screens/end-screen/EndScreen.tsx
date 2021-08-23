import { IonButton, IonContent, IonPage } from '@ionic/react';
import { Link } from 'react-router-dom';

const EndScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col justify-center items-center">
          <h1>Tillykke!</h1>
          <p>Du har nu gennemført episode episodenavn</p>
          <h1>Du fik 25 / 50 points</h1>
          <div className="mt-10">
            <Link to="/episodes">
              <IonButton>Afslut</IonButton>
            </Link>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default EndScreen;
