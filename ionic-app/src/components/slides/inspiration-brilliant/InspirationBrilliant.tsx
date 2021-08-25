import styles from './inspiration-brilliant.module.css';
import { IonImg } from '@ionic/react';
import brilliantGif from '../../../assets/problem-solving.gif';

type IProps = {
  className?: string;
};

const InspirationBrilliant: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col items-center mt-2`}>
      <IonImg className={styles.gif} src={brilliantGif} />
    </div>
  );
};
export default InspirationBrilliant;
