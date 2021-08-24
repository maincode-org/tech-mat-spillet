import { IonImg } from '@ionic/react';
import styles from './swipe-indicator.module.css';
import swipeRight from '../../assets/SWIPERIGHT.svg';

/** Describe the purpose of the SwipeIndicator component here.*/

type IProps = {
  className?: string;
};

const SwipeIndicator: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} p-05 glass-bg rounded`}>
      <IonImg className={`${styles.swipeRightArrow} self-center swingimage`} src={swipeRight} />
    </div>
  );
};
export default SwipeIndicator;
