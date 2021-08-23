import { IonContent, IonPage, IonSlides, IonSlide } from '@ionic/react';
import { useRef } from 'react';
import SwipeIndicator from '../../components/swipe-indicator/SwipeIndicator';
import FullscreenSlide from '../../components/fullscreen-slide/FullscreenSlide';

const Welcome: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  const ionContentRef = useRef<HTMLIonContentElement>(null);
  const scrollToTop = () => ionContentRef.current && ionContentRef?.current.scrollToTop(200);

  return (
    <IonPage>
      <IonContent ref={ionContentRef} className="bg-cover-blur">
        <IonSlides options={slideOpts} onIonSlideDidChange={scrollToTop}>
          <FullscreenSlide>
            <div className="flex flex-col justify-center w-full items-center">
              <h2>Velkommen til</h2>

              <SwipeIndicator className="m-2" />
            </div>
          </FullscreenSlide>
          <FullscreenSlide>
            <div className="flex flex-col justify-center">slide2</div>
          </FullscreenSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
export default Welcome;
