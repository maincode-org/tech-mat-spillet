import { IonButton, IonContent, IonPage, IonFab, IonFabList, IonFabButton, IonIcon, IonFooter } from '@ionic/react';
import styles from './progression.module.css';
import { useRecoilValue } from 'recoil';
import { episodesDataState } from '../../recoil/atoms/gameDataAtom';
import { roundIndexInEpisodeState } from '../../recoil/atoms/progressionAtoms';
import { indexInShowState } from '../../recoil/atoms/progressionAtoms';
import CustomTimeline from '../../components/custom-timeline/CustomTimeline';
import { IFunFact, IRoundData } from '../../../types/application-types';
import { arrowUpCircle } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { getFunFactsData } from '../../lib/helpers';
import { generateBackgroundOverwrite } from '../../lib/style-generators';

const Progression: React.FC = () => {
  const indexInShow = useRecoilValue(indexInShowState);
  const episodeData = useRecoilValue(episodesDataState);
  const roundIndexInEpisode = useRecoilValue(roundIndexInEpisodeState);
  const [currentRoundFunFacts, setCurrentRoundFunFacts] = useState<IFunFact[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setCurrentRoundFunFacts((await getFunFactsData(Number(sortedRoundData[roundIndexInEpisode]?.id))) ?? 1);
    })();
  }, [setCurrentRoundFunFacts]);

  // Comparator
  const compare = (a: IRoundData, b: IRoundData) => {
    if (a.indexInEpisode < b.indexInEpisode) return -1;
    else if (a.indexInEpisode > b.indexInEpisode) return 1;
    return 0;
  };

  const currentEpisode = episodeData.find((episode) => episode.indexInTVShow === indexInShow);
  const roundData = currentEpisode?.rounds ?? [];
  const rData = roundData as unknown as IRoundData[];
  const sortedRoundData = [...rData].sort(compare);

  const isAllRoundsComplete = roundIndexInEpisode > roundData.length;

  return (
    <IonPage>
      <IonContent className="bg-cover-blur" style={{ '--background': generateBackgroundOverwrite(currentEpisode?.progressionBackground?.url) }}>
        <div className="flex flex-col justify-center items-center pb-4">
          <CustomTimeline roundsData={sortedRoundData} />
          {!!currentRoundFunFacts?.[0] && (
            <IonFab className={styles.fabContainer} vertical="bottom" horizontal="start">
              <IonFabButton className={styles.fabIcon}>
                <IonIcon className={styles.fabIcon} icon={arrowUpCircle} />
              </IonFabButton>
              <IonFabList side="top">
                <div className={`${styles.funFactContainer} glass-bg card-shadow rounded w-full mx-1`}>
                  <h4 className="w-full h-full bold">{currentRoundFunFacts[0].title}</h4>
                  <p className="w-full h-full">{currentRoundFunFacts[0].text}</p>
                </div>
              </IonFabList>
            </IonFab>
          )}
        </div>
        <IonFooter className={`${styles.footer} glass-bg card-shadow`}>
          <IonButton className="bold" routerLink={isAllRoundsComplete ? '/end-screen' : '/questions'}>
            {isAllRoundsComplete ? 'Afslut spil' : `Start "${sortedRoundData ? sortedRoundData[roundIndexInEpisode - 1]?.title : 'næste runde'}"`}
          </IonButton>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};
export default Progression;
