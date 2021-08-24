import styles from './class-ranking.module.css';
/** Describe the purpose of the ClassRanking component here.*/

type IProps = {
  className?: string;
};

const ClassRanking: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default ClassRanking;
