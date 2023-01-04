import React from 'react';
import {
    IonButton,
    IonButtons,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonModal,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {returnFreeGameDate, returnFreeGameImage} from "../util/common";

const GameDetailModal: React.FC<any> = ({freeGame, isOpen, closeAction}) => {
    return (
        <IonModal isOpen={isOpen}
                  initialBreakpoint={0.75}
                  breakpoints={[0.75, 1]}
        >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{freeGame?.title}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={closeAction}>
                            Close
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <img alt={freeGame?.title}
                     src={returnFreeGameImage(freeGame, "Tall")}
                />
                <IonCardHeader>
                    <IonCardTitle>
                        {freeGame?.title}
                    </IonCardTitle>
                    <IonCardSubtitle>
                        {returnFreeGameDate(freeGame)}
                    </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    {freeGame?.description}
                </IonCardContent>
                {freeGame?.productSlug &&
                    <IonButton fill="outline" onClick={() => {
                        window.open(`https://store.epicgames.com/p/${freeGame?.productSlug}`);
                    }}>
                        Go to Epic Store
                    </IonButton>
                }
            </IonContent>
        </IonModal>
    );
};

export default GameDetailModal;
