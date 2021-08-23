import { useEffect, useState } from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton, IonModal, IonCard, IonImg, IonCardHeader, IonCardSubtitle } from '@ionic/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getEpisodeData } from '../../lib/helpers';
import { indexInShowState } from '../../recoil/atoms/progressionAtoms';
import { episodesDataState, tvShowDataState } from '../../recoil/atoms/gameDataAtom';
import styles from './episodes.module.css';
import { generateBackgroundOverwrite } from '../../lib/style-generators';
import GlassbarHeader from '../../components/glassbar-header/GlassbarHeader';

const Episodes: React.FC = () => {
  const tvShowData = useRecoilValue(tvShowDataState);
  const [currentModalIndex, setCurrentModalIndex] = useState<number | undefined>(undefined);
  const [episodeData, setEpisodeData] = useRecoilState(episodesDataState);
  const [, setIndexInShow] = useRecoilState(indexInShowState);

  useEffect(() => {
    (async () => await getEpisodeData(Number(tvShowData?.id ?? 1)).then((res) => setEpisodeData(res ?? [])))();
  }, [setEpisodeData]);

  const continueButtonHandler = (indexInShow: number) => {
    setCurrentModalIndex(undefined);
    setIndexInShow(indexInShow);
  };

  console.log('episode data', episodeData);

  return (
    <IonPage>
      <IonContent fullscreen className="bg-cover-blur" style={{ '--background': generateBackgroundOverwrite(tvShowData?.secondaryBackground?.url) }}>
        <div className="flex flex-col items-center">
          <GlassbarHeader>
            <h1 className="text-center">Vælg episode</h1>
          </GlassbarHeader>
          <IonGrid>
            <IonRow>
              {episodeData &&
                episodeData.map((episode, i) => (
                  <IonCol key={i} size="6">
                    {makeModal(
                      episode.indexInTVShow,
                      episode.title,
                      episode.isUnlocked,
                      episode.buttonText,
                      () => setCurrentModalIndex(undefined),
                      continueButtonHandler,
                      currentModalIndex === i,
                      episode.description,
                      tvShowData?.secondaryBackground?.url
                    )}
                    <IonCard className={`card-shadow m-0 transparent ${!episode.isUnlocked && styles.locked}`} onClick={() => setCurrentModalIndex(i)}>
                      <IonImg src={episode.thumbnail.url} />
                      <IonCardHeader className={`glass-bg p-05 ${styles.cardHeading}`}>
                        <IonCardSubtitle className="text-center">{`${episode.indexInTVShow}: ${episode.title}`}</IonCardSubtitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                ))}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Episodes;

const makeModal = (
  indexInShow: number,
  title: string,
  isUnlocked: boolean,
  buttonText: string,
  closeButtonHandler: () => void,
  continueButtonHandler: (indexInShow: number) => void,
  shouldRender: boolean,
  description?: string,
  backgroundUrl?: string
) => {
  return (
    <IonModal isOpen={shouldRender}>
      <div style={{ background: generateBackgroundOverwrite(backgroundUrl) }} className={styles.modalBackground}>
        <GlassbarHeader>
          <h1 className="text-center">{title}</h1>
        </GlassbarHeader>
        <div className={styles.modalContainer}>
          <p className={`${styles.modalText} glass-bg rounded`}>{description ?? ''}</p>
          <div className={styles.closeModalButton}>
            <IonButton className="bold" onClick={closeButtonHandler}>
              Tilbage
            </IonButton>
          </div>
          <div className={styles.continueButton}>
            <IonButton className="bold" disabled={!isUnlocked} onClick={() => continueButtonHandler(indexInShow)} routerLink="/progression" color="primary">
              {buttonText}
            </IonButton>
          </div>
        </div>
      </div>
    </IonModal>
  );
};
