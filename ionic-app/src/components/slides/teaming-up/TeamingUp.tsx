import styles from './teaming-up.module.css';
import { IonImg } from '@ionic/react';
import interview from '../../../assets/interview.svg';

type IProps = {
  className?: string;
};

const TeamingUp: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col items-center mt-2`}>
      <IonImg className={styles.img} src={interview} />
    </div>
  );
};
export default TeamingUp;
