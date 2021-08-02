import { IonPage, IonContent } from '@ionic/react';
import DoughnutChart from "../components/chart/DoughnutChart";

const Progress: React.FC = () => {
  return (
      <div>
          <IonPage class="ion-page" id="main-content">
              <IonContent fullscreen>
                  <div className="container bg-violet">
                      <DoughnutChart
                          data={{
                              labels: ['HTML', 'Geometri', 'Algebra', 'Ligninger', 'CSS', 'Funktioner'],
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
