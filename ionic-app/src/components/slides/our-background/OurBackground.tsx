import AutocenteredBullets from '../../autocentered-bullets/AutocenteredBullets';

type IProps = {
  className?: string;
};

const OurBackground: React.FC<IProps> = () => {
  return (
    <AutocenteredBullets>
      <h3>{'>'} Undervisere og kursusforfattere hos IT-Universitetet i København</h3>
      <h3>{'>'} Oplæring af en håndfuld juniorudviklere som chefudvikler hos en startup</h3>
      <h3>{'>'} Aktive Open Source contributors og freelancere</h3>
    </AutocenteredBullets>
  );
};
export default OurBackground;
