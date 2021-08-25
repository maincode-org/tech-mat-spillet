import styles from './autocentered-bullets.module.css';
type IProps = {
  className?: string;
};

const AutocenteredBullets: React.FC<IProps> = ({ className, children }) => {
  return (
    <div className={`${className} flex h-90`}>
      <div className={`${styles.container} flex flex-col text-left`}>{children}</div>
    </div>
  );
};
export default AutocenteredBullets;
