import styles from './sandbox.module.css';
import { IonPage, IonContent } from '@ionic/react';
import CannonSim from '../../components/simulations/cannon-sim/CannonSim';

const Sandbox: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="w-full h-full flex items-center justify-center">
          <div className={`${styles.centerBox} card-shadow rounded`}>
            <CannonSim id="cannon" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Sandbox;
