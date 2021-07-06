import './Avatar.css';
import avatar from '../../assets/1F479.svg';
import { IonImg } from '@ionic/react'

interface IProps {
  characterName: string;
}

const Avatar: React.FC<IProps> = ({ characterName }) => {
  return (
    <div className="container">
      <strong>{characterName}</strong>
        <IonImg className="avatar" src={avatar} />
    </div>
  );
};

export default Avatar;
