import styles from './our-background.module.css';
/** Describe the purpose of the OurBackground component here.*/

type IProps = {
    className?: string;
}

const OurBackground: React.FC<IProps> = ({ className }) => {
    return (
      <div className={className}></div>
    );
}
export default OurBackground;
