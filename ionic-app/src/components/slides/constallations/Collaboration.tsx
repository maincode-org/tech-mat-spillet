import AutocenteredBullets from '../../autocentered-bullets/AutocenteredBullets';

type IProps = {
  className?: string;
};

const Collaboration: React.FC<IProps> = ({ className }) => {
  return (
    <AutocenteredBullets>
      <h3>{'>'} I får gratis demoadgang i et år</h3>
      <h3>{'>'} I giver feedback og hjælper med at forme frameworket</h3>
      <h3>{'>'} Vi laver en serviceaftale når produktet er som i har brug for</h3>
    </AutocenteredBullets>
  );
};
export default Collaboration;
