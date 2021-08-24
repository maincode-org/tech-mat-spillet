import styles from './teaming-up.module.css';
/** Describe the purpose of the TeamingUp component here.*/

type IProps = {
  className?: string;
};

const TeamingUp: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default TeamingUp;
