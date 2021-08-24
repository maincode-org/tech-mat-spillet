import styles from './content-purpose.module.css';
/** Describe the purpose of the ContentPurpose component here.*/

type IProps = {
    className?: string;
}

const ContentPurpose: React.FC<IProps> = ({ className }) => {
    return (
      <div className={className}></div>
    );
}
export default ContentPurpose;
