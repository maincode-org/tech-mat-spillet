import styles from './who-are-we.module.css';
import { IonImg } from '@ionic/react';
import robot from './../../../assets/maincode-robot.png';
import photo from './../../../assets/us-photo.jpg';

type IProps = {
  className?: string;
};

const WhoAreWe: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} flex justify-center mt-4 ml-4 h-full`}>
      <IonImg className={`${styles.photo} rounded box-shadow mr-3`} alt="Os" src={photo} />
      <IonImg className={styles.robot} alt="Robot" src={robot} />
    </div>
  );
};
export default WhoAreWe;
