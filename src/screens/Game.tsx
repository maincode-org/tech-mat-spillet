import { IonContent, IonPage, IonSlides, IonSlide } from '@ionic/react'
import functionPicture from '../assets/funktion.png'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import '../styles/ionic-theme.css'
import Theory from '../components/assignment/theory/Theory'
import MathAssignment from '../components/assignment/math/MathAssignment'

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
