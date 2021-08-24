import styles from './content-campaigns.module.css';
/** Describe the purpose of the ContentCampaigns component here.*/

type IProps = {
    className?: string;
}

const ContentCampaigns: React.FC<IProps> = ({ className }) => {
    return (
      <div className={className}></div>
    );
}
export default ContentCampaigns;
