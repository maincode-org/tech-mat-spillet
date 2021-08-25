import AutocenteredBullets from '../../autocentered-bullets/AutocenteredBullets';
import { IonImg } from '@ionic/react';
import rankingImg from '../../../assets/leader-board.jpg';
import styles from './class-ranking.module.css';
type IProps = {
  className?: string;
};

const ClassRanking: React.FC<IProps> = ({ className }) => {
  return (
    <div className="h-full flex">
      <AutocenteredBullets>
        <h3>{'>'} Modstanderen er parralelklassen</h3>
        <h3>{'>'} De bedste hold kommer på den landsomspændende rangliste</h3>
      </AutocenteredBullets>
      <IonImg src={rankingImg} className={`${styles.img} pr-2`} />
    </div>
  );
};
export default ClassRanking;
