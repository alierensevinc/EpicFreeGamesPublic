import React, {useEffect, useState} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter} from '@ionic/react';
import RegionSelectComponent from "../components/RegionSelect";
import SwipeComponent from "../components/SwipeComponent";
import GameDetailModal from "../components/GameDetailModal";
import {useApi} from "../context/ApiContext";

const CurrentGamesPage: React.FC = () => {
    const {
        region,
        freeGameList,
        onGetRegion,
        onChangeRegion,
        getCurrentEpicFreeGames
    } = useApi();
    const [isModalOpen, setIsModalOpen] = useState<any>(false);
    const [selectedFreeGame, setSelectedFreeGame] = useState<any>(null);

    useIonViewWillEnter(() => {
        onGetRegion();
    });

    useEffect(() => {
        if (region.slug) {
            getCurrentEpicFreeGames(region.slug);
        }
    }, [region]);

    const openModal = (index) => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedFreeGame(freeGameList[index]);
            setIsModalOpen(true);
        }, 100);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <IonPage id="current-games-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Game Tracker</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Game Tracker
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <RegionSelectComponent onChangeRegion={onChangeRegion} region={region}/>
                <SwipeComponent freeGameList={freeGameList} openModalAction={openModal}/>
                <GameDetailModal freeGame={selectedFreeGame} isOpen={isModalOpen} closeAction={closeModal}/>
            </IonContent>
        </IonPage>
    );
};

export default CurrentGamesPage;
