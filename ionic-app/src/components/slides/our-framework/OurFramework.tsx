import styles from './our-framework.module.css';
import AutocenteredBullets from '../../autocentered-bullets/AutocenteredBullets';

const OurFramework: React.FC = () => {
  return (
    <AutocenteredBullets>
      <h3>{'>'} Udvikling af nyt materiale til læringsplatforme</h3>
      <h3>{'>'} Interaktive opgaver på hjemmesider</h3>
      <h3>{'>'} En opgave-motor til læringsspil og apps</h3>
    </AutocenteredBullets>
  );
};
export default OurFramework;
