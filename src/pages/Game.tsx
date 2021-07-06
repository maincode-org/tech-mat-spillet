import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Game: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tech Mat spillet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">The Game</IonTitle>
          </IonToolbar>
        </IonHeader>
          <h1>Contents of tech mat spillet</h1>
      </IonContent>
    </IonPage>
  );
};

export default Game;
