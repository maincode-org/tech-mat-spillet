import styles from './constallations.module.css';
import AutocenteredBullets from '../../autocentered-bullets/AutocenteredBullets';
/** Describe the purpose of the Constallations component here.*/

type IProps = {
  className?: string;
};

const Constallations: React.FC<IProps> = ({ className }) => {
  return (
    <AutocenteredBullets>
      <h3>{'>'} Leverandøraftale</h3>
      <h3>{'>'} Samarbejde - vi udvikler gratis - det ligger på Clio </h3>
      <h3>{'>'} Konsulentaftale</h3>
      <h3>{'>'} Andet?</h3>
    </AutocenteredBullets>
  );
};
export default Constallations;
