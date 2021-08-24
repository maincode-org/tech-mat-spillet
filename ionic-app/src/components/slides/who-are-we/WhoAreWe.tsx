/** Describe the purpose of the WhoAreWe component here.*/
import styles from './who-are-we.module.css';

type IProps = {
  className?: string;
};

const WhoAreWe: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default WhoAreWe;
