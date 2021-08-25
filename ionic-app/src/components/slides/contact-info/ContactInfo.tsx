import styles from './contact-info.module.css';
import { IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import maincodeRobot from '../../../assets/maincode-robot.png';

type IProps = {
  className?: string;
};

const ContactInfo: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} w-full h-90 flex flex-row justify-around items-center`}>
      <IonGrid>
        <IonRow>
          <IonCol size="4">
            <div className="flex flex-col justify-center items-center">
              <h3>Mail</h3>
              <p>mhn@maincode.dk</p>
              <p>mark@maincode.dk</p>
            </div>
          </IonCol>
          <IonCol size="4">
            <div className="w-full flex justify-center items-center">
              <IonImg className={styles.img} src={maincodeRobot} />
            </div>
          </IonCol>
          <IonCol size="4">
            <div className="flex flex-col justify-center items-center">
              <h3>Telefon</h3>
              <p className="text-left">28 57 21 87</p>
              <p className="text-left">42 33 42 56</p>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
export default ContactInfo;
