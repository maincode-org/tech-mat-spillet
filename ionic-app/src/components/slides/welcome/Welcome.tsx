import TeachingImg from '../../../assets/teaching.svg';
import { IonImg } from '@ionic/react';
import styles from './welcome.module.css';

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-2">
      <IonImg className={styles.illustration} src={TeachingImg} />
    </div>
  );
};
export default Welcome;
