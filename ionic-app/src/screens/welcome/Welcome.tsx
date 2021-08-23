import { IonContent, IonPage, IonImg, IonSlides, IonSlide } from '@ionic/react';
import styles from './welcome.module.css';
import Login from '../../components/login/Login';
import { tvShowDataState } from '../../recoil/atoms/gameDataAtom';
import { useRecoilValue } from 'recoil';
import { useRef } from 'react';
import GlassbarHeader from '../../components/glassbar-header/GlassbarHeader';
import { generateBackgroundOverwrite } from '../../lib/style-generators';
import SwipeIndicator from '../../components/swipe-indicator/SwipeIndicator';

const Welcome: React.FC = () => {
  const tvShowData = useRecoilValue(tvShowDataState);
  const gameName = tvShowData?.name ?? 'Spilnavn';
  const gameShowLogo = tvShowData?.showLogo;

  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  const ionContentRef = useRef<HTMLIonContentElement>(null);
  const scrollToTop = () => ionContentRef.current && ionContentRef?.current.scrollToTop(200);

  return (
    <IonPage>
      <IonContent ref={ionContentRef} className="bg-cover-blur" style={{ '--background': generateBackgroundOverwrite(tvShowData?.background?.url) }}>
        <IonSlides options={slideOpts} onIonSlideDidChange={scrollToTop}>
          <IonSlide>
            <div className="flex flex-col justify-center w-full items-center">
              <GlassbarHeader>
                <h2>Velkommen til</h2>
                <h1>{`${gameName}`}</h1>
              </GlassbarHeader>

              {gameShowLogo && <IonImg className={`${styles.gameShowLogo}`} src={gameShowLogo?.url} />}

              <SwipeIndicator className="m-2" />
            </div>
          </IonSlide>
          <IonSlide>
            <div className="flex flex-col justify-center">
              <Login />
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
export default Welcome;
