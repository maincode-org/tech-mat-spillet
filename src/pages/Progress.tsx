import {
    IonPage,
    IonContent,
} from '@ionic/react';

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
import Header from "../components/Header/Header";

const Progress: React.FC = () => {
  return (
      <div>
          <IonPage class="ion-page" id="main-content">
              <IonContent fullscreen>
                  <div className="container bg-violet">
                      <h1>Contents of progress page</h1>
                  </div>
              </IonContent>
          </IonPage>
      </div>
  );
};

export default Progress;
