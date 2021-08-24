/** Describe the purpose of the FullscreenSlide component here.*/
import { IonSlide } from '@ionic/react';
import styles from './fullscreen-slider.module.css';

type IProps = {
  title?: string;
  className?: string;
};

const FullscreenSlide: React.FC<IProps> = ({ title, className, children }) => {
  return (
    <IonSlide className={className ?? ''}>
      <div className={`${styles.paper} glass-bg rounded card-shadow`}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </IonSlide>
  );
};
export default FullscreenSlide;
