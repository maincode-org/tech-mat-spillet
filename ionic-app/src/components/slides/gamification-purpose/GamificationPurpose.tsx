import styles from './gamification-purpose.module.css';
import { IonImg } from '@ionic/react';
import gamificationImg from '../../../assets/gamification2.png';

type IProps = {
  className?: string;
};

const GamificationPurpose: React.FC<IProps> = ({ className }) => {
  return (
    <div className="h-80 items-center flex justify-center">
      <IonImg src={gamificationImg} className={styles.img} />
    </div>
  );
};
export default GamificationPurpose;
