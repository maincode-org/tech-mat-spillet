import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';
import styles from './answer.module.css';
import { IAnswerOption } from '../../../types/application-types';

export const getAnswerOption = (answerOption: IAnswerOption, onClick: (index: number) => void, key?: number): JSX.Element => {
  if (answerOption.image && answerOption.text)
    return <MixAnswer key={key} text={answerOption.text} imageURL={answerOption.image.url} indexInQuestion={answerOption.indexInQuestion} onClick={onClick} />;
  else if (answerOption.image) return <ImageAnswer key={key} imageURL={answerOption.image.url} indexInQuestion={answerOption.indexInQuestion} onClick={onClick} />;
  else return <TextAnswer key={key} text={answerOption.text ?? 'Svarmulighed ikke fundet'} indexInQuestion={answerOption.indexInQuestion} onClick={onClick} />;
};

type IAnswer = {
  key: number | undefined;
  indexInQuestion: number;
  onClick: (index: number) => void;
};

export const TextAnswer: React.FC<IAnswer & { text: string }> = ({ key, text, onClick, indexInQuestion }) => {
  return (
    <IonButton className={`${styles.textButton} bold`} key={key} color={'primary'} onClick={() => onClick(indexInQuestion)}>
      {text}
    </IonButton>
  );
};

const ImageAnswer: React.FC<IAnswer & { imageURL: string }> = ({ key, imageURL, onClick, indexInQuestion }) => {
  return (
    <button key={key} className={`${styles.imageButton} glass-bg card-shadow rounded`} onClick={() => onClick(indexInQuestion)}>
      <IonImg src={imageURL} />
    </button>
  );
};

const MixAnswer: React.FC<IAnswer & { text: string; imageURL: string }> = ({ key, text, imageURL, indexInQuestion, onClick }) => {
  return (
    <IonCard className={`${styles.ionCard} glass-bg card-shadow rounded`} key={key} onClick={() => onClick(indexInQuestion)}>
      <IonImg className={styles.mixButton} src={imageURL} />
      <IonCardHeader>
        <IonCardSubtitle>{text}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};
