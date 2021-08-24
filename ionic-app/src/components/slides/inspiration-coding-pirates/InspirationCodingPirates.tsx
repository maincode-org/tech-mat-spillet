import styles from './inspiration-coding-pirates.module.css';
/** Describe the purpose of the InspirationCodingPirates component here.*/

type IProps = {
  className?: string;
};

const InspirationCodingPirates: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default InspirationCodingPirates;
