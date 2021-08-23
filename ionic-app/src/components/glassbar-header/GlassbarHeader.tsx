/** Describe the purpose of the GlassbarHeader component here.*/
import styles from './glassbar-header.module.css';

const GlassbarHeader: React.FC<{ className?: string }> = ({ className, children }) => {
  return <div className={`${styles.container} ${className} glass-bg w-full card-shadow`}>{children}</div>;
};
export default GlassbarHeader;
