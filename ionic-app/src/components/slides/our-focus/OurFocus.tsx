import styles from './our-focus.module.css';

type IProps = {
  className?: string;
};

const OurFocus: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default OurFocus;
