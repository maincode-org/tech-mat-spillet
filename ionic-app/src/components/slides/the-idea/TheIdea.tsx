import styles from './the-idea.module.css';
/** Describe the purpose of the TheIdea component here.*/

type IProps = {
  className?: string;
};

const TheIdea: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default TheIdea;
