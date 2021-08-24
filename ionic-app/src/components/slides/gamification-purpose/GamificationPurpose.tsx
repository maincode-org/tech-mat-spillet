import styles from './gamification-purpose.module.css';
/** Describe the purpose of the GamificationPurpose component here.*/

type IProps = {
  className?: string;
};

const GamificationPurpose: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default GamificationPurpose;
