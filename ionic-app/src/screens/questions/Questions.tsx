import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonImg, IonSlides, IonSlide } from '@ionic/react';
import styles from './question.module.css';
import { useRecoilValue, useRecoilState } from 'recoil';
import { indexInShowState, roundIndexInEpisodeState } from '../../recoil/atoms/progressionAtoms';
import { episodesDataState } from '../../recoil/atoms/gameDataAtom';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../../components/progress-bar/ProgressBar';
import { getAnswerOption } from '../../components/answer/Answer';
import { getQuestionsData } from '../../lib/helpers';
import { IAnswerOption, IQuestion } from '../../../types/application-types';
import { generateBackgroundOverwrite } from '../../lib/style-generators';
import GlassbarHeader from '../../components/glassbar-header/GlassbarHeader';
import SwipeIndicator from '../../components/swipe-indicator/SwipeIndicator';

const Questions: React.FC = () => {
  const history = useHistory();
  const episodeData = useRecoilValue(episodesDataState);
  const indexInShow = useRecoilValue(indexInShowState);
  const [roundIndexInEpisode, setRoundIndexInEpisode] = useRecoilState(roundIndexInEpisodeState);
  const [questions, setQuestions] = useState<IQuestion[] | undefined>(undefined);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | undefined>(undefined);
  const [, setChosenAnswer] = useState(0);

  /* ---------------- Ion-Slides config ------------------ */
  const sliderRef = useRef<HTMLIonSlidesElement>(null);

  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  const slidePrev = () => sliderRef.current && sliderRef?.current.slidePrev();
  /* ----------------------------------------------------  */

  const ionContentRef = useRef<HTMLIonContentElement>(null);
  const scrollToTop = () => ionContentRef.current && ionContentRef?.current.scrollToTop(200);

  useEffect(() => {
    (async () => {
      const data = await getQuestionsData(episodeData, indexInShow, roundIndexInEpisode);
      if (!data) return;
      setQuestions(data);
      setCurrentQuestion(data[0]);
    })();
  }, [setQuestions, setCurrentQuestion]);

  if (!questions) return null;
  if (!currentQuestion) return null;

  const progressGame = (): void => {
    if (questions.find((q) => q.indexInRound > currentQuestion.indexInRound)) {
      setCurrentQuestion(questions.find((q) => q.indexInRound === currentQuestion.indexInRound + 1));
      slidePrev();
    } else {
      setRoundIndexInEpisode(roundIndexInEpisode + 1);
      history.replace('/progression');
    }
  };

  const handleSubmit = (indexInQuestion: number): void => {
    setChosenAnswer(indexInQuestion);
    progressGame();
  };

  const calcProgressPercentage = () => ((currentQuestion.indexInRound - 1) / questions.length) * 100;

  return (
    <IonPage>
      <IonContent ref={ionContentRef} className="bg-cover-blur" style={{ '--background': generateBackgroundOverwrite(currentQuestion?.cover?.url) }}>
        <GlassbarHeader className="fixed">
          <div className={`${styles.mui} ${styles.progressBarContainer}`}>
            <ProgressBar percentage={calcProgressPercentage()} />
          </div>
        </GlassbarHeader>
        <IonSlides ref={sliderRef} className="px-1 vh-full pt-4" options={slideOpts} onIonSlideDidChange={scrollToTop}>
          <IonSlide>
            <div className={styles.outerContainer}>
              <div className={`${styles.questionContainer} glass-bg rounded`}>
                <h1>{currentQuestion.title}</h1>
                <p className={`${styles.questionText} px-1`}>{currentQuestion.text}</p>
                {currentQuestion.icon && <IonImg className={styles.icon} src={currentQuestion.icon.url} />}
              </div>
              <div className={styles.swipeIndicatorContainer}>
                <SwipeIndicator />
              </div>
            </div>
          </IonSlide>
          <IonSlide>
            <div className="w-full flex flex-col items-center relative mt-1">{renderAnswerOptions(currentQuestion.answerOptions, handleSubmit)}</div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
export default Questions;

// Helper to help render answer options
const renderAnswerOptions = (answerOptions: IAnswerOption[], handleSubmit: (indexInQuestion: number) => void): JSX.Element | JSX.Element[] => {
  if (answerOptions.length >= 4) {
    return (
      <IonGrid>
        <IonRow>
          {answerOptions.map((a, i) => (
            <IonCol size="6" key={i}>
              {getAnswerOption(a, (indexInQuestion) => handleSubmit(indexInQuestion))}
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    );
  }

  return answerOptions.map((a, i) => getAnswerOption(a, (indexInQuestion) => handleSubmit(indexInQuestion), i));
};
