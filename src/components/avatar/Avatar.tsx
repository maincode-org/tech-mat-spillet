import './avatar.css';
import avatar from '../../assets/1F479.svg';
import { IonImg } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../../styles/ionic-theme.css';

type IProps = {
  characterName: string;
}

const Avatar: React.FC<IProps> = ({ characterName }) => {
  return (
    <div className="avatar-container bg-violet">
      <strong>{characterName}</strong>
        <IonImg className="avatar" src={avatar} />
    </div>
  );
};
export default Avatar;
