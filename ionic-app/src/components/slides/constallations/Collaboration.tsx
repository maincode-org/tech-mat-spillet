import AutocenteredBullets from '../../autocentered-bullets/AutocenteredBullets';

type IProps = {
  className?: string;
};

const Collaboration: React.FC<IProps> = ({ className }) => {
  return (
    <AutocenteredBullets>
      <h3>{'>'} I får gratis demo-adgang i et år</h3>
      <h3>{'>'} I er med til at forme frameworkets udvikling igennem løbende feedback</h3>
      <h3>{'>'} Vi laver en serviceaftale når produktet er som i har brug for</h3>
    </AutocenteredBullets>
  );
};
export default Collaboration;
