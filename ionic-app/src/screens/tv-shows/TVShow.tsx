import { IonContent, IonPage, IonImg, IonCardHeader, IonCard, IonCardSubtitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getTvShowData } from '../../lib/helpers';
import { useRecoilState } from 'recoil';
import { tvShowDataState } from '../../recoil/atoms/gameDataAtom';
import { tvShowIdState } from '../../recoil/atoms/progressionAtoms';
import styles from './tv-show.module.css';
import GlassbarHeader from '../../components/glassbar-header/GlassbarHeader';
import { ITVShow } from '../../../types/application-types';

const TVShow = () => {
  const history = useHistory();
  const [tvShowsData, setTvShowsData] = useState<ITVShow[] | undefined>(undefined); // All shows
  const [, setTVShowData] = useRecoilState(tvShowDataState);
  const [, setTvShowId] = useRecoilState(tvShowIdState);

  useEffect(() => {
    (async () => await getTvShowData().then((res) => setTvShowsData(res)))();
  }, [setTvShowsData]);

  const handleTvShowClick = (tvShowId: number) => {
    setTvShowId(tvShowId);
    setTVShowData(tvShowsData?.find((show) => Number(show.id) === tvShowId) ?? undefined);
    history.push('/welcome');
  };

  console.log('tvShowData', tvShowsData);

  return (
    <IonPage>
      <IonContent className={styles.container}>
        <div className="flex flex-col items-center">
          <GlassbarHeader>
            <h1 className="text-center">Vælg demo</h1>
          </GlassbarHeader>
          <div className="w-full p-2">
            {tvShowsData &&
              tvShowsData.map((show, i) => (
                <IonCard className={`${styles.card} card-shadow`} key={i} onClick={() => handleTvShowClick(Number(show.id))}>
                  <IonImg src={show.splash?.url} />
                  <IonCardHeader className="glass-bg">
                    <IonCardSubtitle className="text-center">{show.name}</IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default TVShow;
