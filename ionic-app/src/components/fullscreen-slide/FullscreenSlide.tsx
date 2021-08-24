/** Describe the purpose of the FullscreenSlide component here.*/
import { IonImg, IonSlide } from '@ionic/react';
import styles from './fullscreen-slider.module.css';
import maincodeLogo from '../../assets/maincode-logo-notfilled.png';
import SwipeIndicator from '../swipe-indicator/SwipeIndicator';

type IProps = {
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  progressIndicator?: string | JSX.Element;
  className?: string;
};

const FullscreenSlide: React.FC<IProps> = ({ title, subtitle, progressIndicator, className, children }) => {
  return (
    <IonSlide className={className ?? ''}>
      <div className={`${styles.paper} glass-bg rounded card-shadow pt-1`}>
        <IonImg className={styles.logo} src={maincodeLogo} />
        <SwipeIndicator className={styles.swipeIndicator} />

        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        {children}
        {progressIndicator && <div className={styles.progressIndicator}>{progressIndicator}</div>}
      </div>
    </IonSlide>
  );
};
export default FullscreenSlide;
