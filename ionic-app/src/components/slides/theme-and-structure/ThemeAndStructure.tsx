import styles from './theme-and-structure.module.css';
/** Describe the purpose of the ThemeAndStructure component here.*/

type IProps = {
    className?: string;
}

const ThemeAndStructure: React.FC<IProps> = ({ className }) => {
    return (
      <div className={className}></div>
    );
}
export default ThemeAndStructure;
