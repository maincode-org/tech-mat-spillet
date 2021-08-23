import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import './styles/generics.css';
import { useState } from 'react';
import TVShow from './screens/tv-shows/TVShow';
import Welcome from './screens/welcome/Welcome';
import Episodes from './screens/episodes/Episodes';
import Questions from './screens/questions/Questions';
import Progression from './screens/progression/Progression';
import EndScreen from './screens/end-screen/EndScreen';

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
import './styles/ionic-theme.css';

/* MUI theme */
import theme from './lib/mui-theme';
import { ThemeProvider } from '@material-ui/styles';

const App: React.FC = () => {
  const [isAuthed] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet id="main">
            <Route exact path="/episodes" component={Episodes} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/progression" component={Progression} />
            <Route exact path="/end-screen" component={EndScreen} />
            <Route exact path="/welcome" render={() => (isAuthed ? <Episodes /> : <Welcome />)} />
            <Route exact path="/" component={TVShow} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  );
};
export default App;
