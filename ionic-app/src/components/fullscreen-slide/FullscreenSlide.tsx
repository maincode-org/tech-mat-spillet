/** Describe the purpose of the FullscreenSlide component here.*/
import { IonSlide } from '@ionic/react';
import styles from './fullscreen-slider.module.css';

type IProps = {
  className?: string;
};

const FullscreenSlide: React.FC<IProps> = ({ className, children }) => {
  return (
    <IonSlide className={className ?? ''}>
      <div className={`${styles.paper} glass-bg rounded card-shadow`}>{children}</div>
    </IonSlide>
  );
};
export default FullscreenSlide;
