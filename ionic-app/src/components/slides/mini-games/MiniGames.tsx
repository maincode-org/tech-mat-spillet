import styles from './mini-games.module.css';

type IProps = {
  className?: string;
};

const MiniGames: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default MiniGames;
