import styles from './our-focus.module.css';
/** Describe the purpose of the OurFocus component here.*/

type IProps = {
  className?: string;
};

const OurFocus: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default OurFocus;
