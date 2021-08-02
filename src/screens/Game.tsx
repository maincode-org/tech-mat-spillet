import { IonContent, IonPage, IonSlides, IonSlide } from '@ionic/react';
import functionPicture from '../assets/funktion.png';
import Theory from '../components/assignment/theory/Theory';
import MathAssignment from '../components/assignment/math/MathAssignment';

const Game: React.FC = () => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  }

  return (
    <div>
      <IonPage class="ion-page" id="main-content">
        <IonContent fullscreen>
          <div className="container bg-violet">
            <IonSlides className="slide-container" pager={true} options={slideOpts}>
              <IonSlide>
                <Theory
                  title="Funktioner"
                  description={`En funktion er i matematik en regel, der til hvert x knytter
                                                nøjagtigt et y. Man kan forstå funktioner som en slags maskine, hvor man
                                                kommer et x ind, og så spytter den et y ud på den anden side.\n
                                                Funktionen beskriver en sammenhæng mellem de to variable x og y. Vi
                                                siger, at x er den uafhængige variabel, fordi vi helt selv kan bestemme,
                                                hvilket x vi "kommer ind i maskinen". Derimod er vi ikke selv herrer
                                                over, hvad der kommer ud af maskinen. Derfor kalder vi y den afhængige
                                                variabel. Vi siger, at y afhænger af, hvilket x vi kommer ind, eller at
                                                y er en funktion af x. Dette skriver vi kort som y=f(x)`}
                  picture={functionPicture}
                />
              </IonSlide>
              <IonSlide>
                <MathAssignment description={<p className="math-assignment-description">Lav en funktion hvor y altid er et lige tal og større end 10.</p>} />
              </IonSlide>
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    </div>
  )
}
export default Game
