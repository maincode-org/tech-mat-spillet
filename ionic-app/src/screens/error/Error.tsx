import { IonContent, IonPage } from '@ionic/react';

const Error: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="w-full h-full flex flex-col justify-center">
          <h1 className="pl-6">Hov! Der skete en fejl.</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Error;
