import React from "react";
import {IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {Redirect, Route} from 'react-router-dom';
import {StorageContext} from "./context/StorageContext";
import {ApiContext} from "./context/ApiContext";
import CurrentGamesPage from './pages/CurrentGamesPage';
import UpcomingGamesPage from "./pages/UpcomingGamesPage";
import {calendar, gameController} from 'ionicons/icons';

const App: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <StorageContext.Provider value={{}}>
                    <ApiContext.Provider value={{}}>
                        <IonTabs>
                            <IonRouterOutlet>
                                <Route exact path="/current">
                                    <CurrentGamesPage/>
                                </Route>
                                <Route exact path="/upcoming">
                                    <UpcomingGamesPage/>
                                </Route>
                                <Redirect exact path="/" to="/current"/>
                            </IonRouterOutlet>
                            <IonTabBar slot="bottom">
                                <IonTabButton tab="current" href="/current">
                                    <IonIcon icon={gameController}/>
                                    <IonLabel>Current</IonLabel>
                                </IonTabButton>
                                <IonTabButton tab="upcoming" href="/upcoming">
                                    <IonIcon icon={calendar}/>
                                    <IonLabel>Upcoming</IonLabel>
                                </IonTabButton>
                            </IonTabBar>
                        </IonTabs>
                    </ApiContext.Provider>
                </StorageContext.Provider>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
