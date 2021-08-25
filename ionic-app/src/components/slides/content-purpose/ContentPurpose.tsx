import styles from './content-purpose.module.css';
import { IonImg } from '@ionic/react';
import codeDanish from '../../../assets/code_danish.png';
import codeTranspiled from '../../../assets/code_transpiled.png';
/** Describe the purpose of the ContentPurpose component here.*/

type IProps = {
  className?: string;
};

const ContentPurpose: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-row items-center justify-center relative`}>
      <IonImg className={`${styles.codePicture} card-shadow rounded`} src={codeDanish} />
      <h2 className={`${styles.rightArrow} mx-4`}>⇄</h2>
      <IonImg className={`${styles.codePicture} card-shadow rounded`} src={codeTranspiled} />
    </div>
  );
};
export default ContentPurpose;
