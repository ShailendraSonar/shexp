// import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Group from './pages/Group';
import UserProfile from './pages/UserProfile';
import Expense from './pages/Expense';
import GroupForm from './pages/GroupForm';
// import Group from './pages/Group';
// import Expense from './pages/Expense';
// import UserProfile from './pages/UserProfile';
setupIonicReact();

const App: React.FC = () => (
  <Router>
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Splitwise Clone</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>
        <IonTabs>
          <IonRouterOutlet>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/groups" component={Group} />
              <Route path="/create-group" component={GroupForm} />
              <Route path="/expenses" component={Expense} />
              <Route path="/profile" component={UserProfile} />
            </Switch>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="groups" href="/groups">
              <IonLabel>Groups</IonLabel>
            </IonTabButton>
            <IonTabButton tab="create-group" href="/create-group">
              <IonLabel>Create Group</IonLabel>
            </IonTabButton>
            <IonTabButton tab="expenses" href="/expenses">
              <IonLabel>Expenses</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonPage>
  </Router>
);

export default App;
