import { IonContent, IonPage, IonSlides } from '@ionic/react';
import { useRef } from 'react';
import styles from './welcome.module.css';
import SwipeIndicator from '../../components/swipe-indicator/SwipeIndicator';
import FullscreenSlide from '../../components/fullscreen-slide/FullscreenSlide';
import Particles from 'react-particles-js';
import options from '../../lib/particleImagesConfig';
import Assignment from '../../components/assignment/assignment/Assignment';
import AssignmentTwo from '../../components/assignment/assignment-two/AssignmentTwo';

const Welcome: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  const ionContentRef = useRef<HTMLIonContentElement>(null);
  const ionSlidesRef = useRef<HTMLIonSlidesElement>(null);

  const handleSlideChange = (): void => {
    // Scroll to top
    ionContentRef.current && ionContentRef?.current.scrollToTop(200);

    console.log(ionSlidesRef.current?.getActiveIndex());
  };

  return (
    <IonPage>
      <IonContent ref={ionContentRef} className="bg-cover-blur">
        <div className={styles.backgroundParticles}>
          <Particles params={options} height={'100vh'} />
        </div>

        <IonSlides className={styles.slider} options={slideOpts} ref={ionSlidesRef} onIonSlideDidChange={handleSlideChange}>
          <FullscreenSlide className={styles.slide} title="Maincode præsenterer">
            <div className="flex flex-col justify-center w-full items-center">
              <h2>Velkommen til</h2>
              <SwipeIndicator className="m-2" />
            </div>
          </FullscreenSlide>
          <FullscreenSlide>
            <Assignment />
          </FullscreenSlide>
          <FullscreenSlide>
            <AssignmentTwo />
          </FullscreenSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
export default Welcome;
