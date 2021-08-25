import styles from './contact-info.module.css';

type IProps = {
  className?: string;
};

const ContactInfo: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>;
};
export default ContactInfo;
