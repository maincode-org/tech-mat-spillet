import styles from './mini-games.module.css';
/** Describe the purpose of the MiniGames component here.*/

type IProps = {
    className?: string;
}

const MiniGames: React.FC<IProps> = ({ className }) => {
    return (
      <div className={className}></div>
    );
}
export default MiniGames;
