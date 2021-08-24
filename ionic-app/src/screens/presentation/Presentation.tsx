import { IonContent, IonPage, IonSlides } from '@ionic/react';
import { useRef, useState } from 'react';
import styles from './presentation.module.css';
import FullscreenSlide from '../../components/fullscreen-slide/FullscreenSlide';
import Particles from 'react-particles-js';
import schoolOptions from '../../lib/particleImagesConfig';
import adventureOptions from '../../lib/particlesConfig';

import Assignment from '../../components/slides/assignments/assignment/Assignment';
import AssignmentTwo from '../../components/slides/assignments/assignment-two/AssignmentTwo';
import slides from './slides';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ionContentRef = useRef<HTMLIonContentElement>(null);
  const ionSlidesRef = useRef<HTMLIonSlidesElement>(null);
  const adventureModeIndex = 1;

  const handleSlideChange = async (): Promise<void> => {
    ionContentRef.current && ionContentRef?.current.scrollToTop(200); // Scroll to top

    setCurrentSlide((await ionSlidesRef.current?.getActiveIndex()) ?? 0);
  };

  return (
    <IonPage>
      <IonContent ref={ionContentRef} className="bg-cover-blur">
        <div className={styles.backgroundParticles}>
          <Particles params={currentSlide > adventureModeIndex ? adventureOptions : schoolOptions} height={'100vh'} />
        </div>

        <IonSlides className={styles.slider} options={slideOpts} ref={ionSlidesRef} onIonSlideDidChange={handleSlideChange}>
          {slides.map((s, i) => (
            <FullscreenSlide key={i} title={s.title} subtitle={s.subtitle}>
              {s.content}
            </FullscreenSlide>
          ))}
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
export default Presentation;
