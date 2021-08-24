import styles from './inspiration-brilliant.module.css';
/** Describe the purpose of the InspirationBrilliant component here.*/

type IProps = {
  className?: string;
};

const InspirationBrilliant: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default InspirationBrilliant;
