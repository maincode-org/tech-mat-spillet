import {
    IonContent,
    IonPage,
} from '@ionic/react';
import Avatar from '../components/avatar/Avatar';

const ProfilePage: React.FC = () => {
  return (
      <div>
          <IonPage class="ion-page" id="main-content">
              <IonContent fullscreen>
                  <Avatar characterName="Spellspitter"/>
              </IonContent>
          </IonPage>
      </div>
  );
};

export default ProfilePage;
