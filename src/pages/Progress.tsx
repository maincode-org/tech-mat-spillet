import {
    IonMenu,
    IonPage,
    IonHeader,
    IonToolbar,
    IonList,
    IonListHeader,
    IonTitle,
    IonContent,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonButtons,
    IonButton
} from '@ionic/react';
import { menuOutline, gameControllerOutline, bulbOutline, constructOutline, logOutOutline } from 'ionicons/icons';

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
import '../theme/variables.css';
import Menu from "../components/Menu/Menu";
import Avatar from "../components/Avatar/Avatar";

const Progress: React.FC = () => {
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
                      <IonTitle>Progress</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <IonContent>
                  <h1>Contents of progress page</h1>
              </IonContent>
          </IonPage>
      </div>
  );
};

export default Progress;
