import styles from './character-development.module.css';
import AutocenteredBullets from '../../autocentered-bullets/AutocenteredBullets';
/** Describe the purpose of the CharacterDevelopment component here.*/

type IProps = {
  className?: string;
};

const CharacterDevelopment: React.FC<IProps> = ({ className }) => {
  return (
    <AutocenteredBullets>
      <h3>{'>'} Din karakter følger dig med rundt på mission</h3>
      <h3>{'>'} Jo flere opgaver klaret jo mere udstyr og medaljer optjenes</h3>
      <h3>{'>'} Din karakter bliver bedre og giver klassen flere fælles point</h3>
    </AutocenteredBullets>
  );
};
export default CharacterDevelopment;
