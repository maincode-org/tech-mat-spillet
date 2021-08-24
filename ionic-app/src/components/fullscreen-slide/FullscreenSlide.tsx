/** Describe the purpose of the FullscreenSlide component here.*/
import { IonImg, IonSlide } from '@ionic/react';
import styles from './fullscreen-slider.module.css';
import maincodeLogo from '../../assets/maincode-logo-notfilled.png';

type IProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

const FullscreenSlide: React.FC<IProps> = ({ title, subtitle, className, children }) => {
  return (
    <IonSlide className={className ?? ''}>
      <div className={`${styles.paper} glass-bg rounded card-shadow`}>
        <IonImg className={styles.logo} src={maincodeLogo} />

        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
        {children}
      </div>
    </IonSlide>
  );
};
export default FullscreenSlide;
