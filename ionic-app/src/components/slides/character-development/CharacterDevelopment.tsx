import styles from './character-development.module.css';
/** Describe the purpose of the CharacterDevelopment component here.*/

type IProps = {
  className?: string;
};

const CharacterDevelopment: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default CharacterDevelopment;
