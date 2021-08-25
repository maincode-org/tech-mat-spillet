import styles from './contact-info.module.css';
import { IonImg } from '@ionic/react';
import maincodeRobot from '../../../assets/maincode-robot.png';

type IProps = {
  className?: string;
};

const ContactInfo: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} w-full h-90 flex flex-row justify-around items-center`}>
      <div className="flex flex-col justify-center items-center">
        <h3>Mail</h3>
        <p>mhn@maincode.dk</p>
        <p>mark@maincode.dk</p>
      </div>
      <IonImg className={styles.img} src={maincodeRobot} />
      <div className="flex flex-col justify-center items-center">
        <h3>Telefon</h3>
        <p className="text-left">28 57 21 87</p>
        <p className="text-left">42 33 42 56</p>
      </div>
    </div>
  );
};
export default ContactInfo;
