import { IonContent, IonPage, IonSlides } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import styles from './maincode-website.module.css';
import FullscreenSlide from '../../components/fullscreen-slide/FullscreenSlide';
import Particles from 'react-particles-js';
import slides from './slides';
import config from '../../lib/lean-particlesjs-config';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const MaincodeWebsite: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ionContentRef = useRef<HTMLIonContentElement>(null);
  const ionSlidesRef = useRef<HTMLIonSlidesElement>(null);
  const [particleConfig, setParticleConfig] = useState(config);

  const handleSlideChange = async (): Promise<void> => setCurrentSlide((await ionSlidesRef.current?.getActiveIndex()) ?? 0);

  // HACK: update the object after first rendering, to spread out the particles and prevent them raining down..
  useEffect(() => {
    setTimeout(() => setParticleConfig({ ...particleConfig, move: { ...particleConfig.move, speed: 0.3 } }), 200);
  }, [particleConfig]);

  return (
    <IonPage>
      <IonContent ref={ionContentRef} className="bg-cover-blur">
        <Particles canvasClassName={styles.backgroundParticles} params={particleConfig} />

        {/** TODO - add fab for settings! Toggle animation + toggle dark-mode */}

        <IonSlides className={styles.slider} options={slideOpts} ref={ionSlidesRef} onIonSlideDidChange={handleSlideChange}>
          {slides.map((s, i) => (
            <FullscreenSlide key={i} progressIndicator={i > 0 ? `${i + 1}/${slides.length}` : undefined} title={s.title} subtitle={s.subtitle} backgroundImage={s.backgroundImage}>
              {s.content}
            </FullscreenSlide>
          ))}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
export default MaincodeWebsite;
