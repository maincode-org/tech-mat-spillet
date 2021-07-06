import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonMenuToggle,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { menuOutline } from "ionicons/icons";
import Avatar from '../components/Avatar/Avatar';
import Menu from "../components/Menu/Menu";

const ProfilePage: React.FC = () => {
  return (
      <div>
          <Menu/>
          <IonPage class="ion-page" id="main-content">
              <IonHeader>
                  <IonToolbar>
                      <IonButtons slot="start">
                          <IonMenuToggle>
                              <IonButton>
                                  <IonIcon icon={menuOutline}/>
                              </IonButton>
                          </IonMenuToggle>
                      </IonButtons>
                      <IonTitle>Profil</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <IonContent>
                  <Avatar characterName="Spellspitter"/>
              </IonContent>
          </IonPage>
      </div>
  );
};

export default ProfilePage;
