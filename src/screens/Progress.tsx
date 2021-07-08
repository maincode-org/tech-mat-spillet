import {
    IonPage,
    IonContent,
} from '@ionic/react';
import DoughnutChart from "../components/chart/DoughnutChart";

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
import '../styles/ionic-theme.css';

const Progress: React.FC = () => {
  return (
      <div>
          <IonPage class="ion-page" id="main-content">
              <IonContent fullscreen>
                  <div className="container bg-violet">
                      <DoughnutChart
                          height={500}
                          width={500}
                          data={{
                              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                              datasets: [
                                  {
                                      label: '# of Votes',
                                      data: [12, 19, 3, 5, 2, 3],
                                      backgroundColor: [
                                          'rgba(255, 99, 132, 0.2)',
                                          'rgba(54, 162, 235, 0.2)',
                                          'rgba(255, 206, 86, 0.2)',
                                          'rgba(75, 192, 192, 0.2)',
                                          'rgba(12,46,229,0.2)',
                                          'rgba(255, 159, 64, 0.2)',
                                      ],
                                      borderColor: [
                                          'rgba(255, 99, 132, 1)',
                                          'rgba(54, 162, 235, 1)',
                                          'rgba(255, 206, 86, 1)',
                                          'rgba(75, 192, 192, 1)',
                                          'rgba(153, 102, 255, 1)',
                                          'rgba(255, 159, 64, 1)',
                                      ],
                                      borderWidth: 1,
                                  }]}}
                      />
                  </div>
              </IonContent>
          </IonPage>
      </div>
  );
};

export default Progress;
