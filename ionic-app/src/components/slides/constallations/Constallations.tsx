import styles from './constallations.module.css';
/** Describe the purpose of the Constallations component here.*/

type IProps = {
    className?: string;
}

const Constallations: React.FC<IProps> = ({ className }) => {
    return (
      <div className={className}></div>
    );
}
export default Constallations;
