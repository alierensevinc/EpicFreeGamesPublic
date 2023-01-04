import React from 'react';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSlide,
    IonSlides
} from '@ionic/react';
import {returnFreeGameDate, returnFreeGameImage} from "../util/common";
import useWindowDimensions from "../hooks/useWindowsDimensions";

const SwipeComponent: React.FC<any> = ({freeGameList, openModalAction}) => {
    const {height} = useWindowDimensions();

    const calculateHeightForSlide = () => {
        if (height < 800) {
            return '100vh';
        } else if (height < 900) {
            return '85vh';
        } else {
            return '60vh';
        }
    }

    const calculateHeightForCard = () => {
        if (height < 800) {
            return '85vh';
        } else if (height < 900) {
            return '70vh';
        } else {
            return '45vh';
        }
    }

    const calculateLengthForDescription = () => {
        if (height < 800) {
            return 150;
        } else if (height < 900) {
            return 300;
        } else {
            return 450;
        }
    }

    const slideOpts = {
        initialSlide: 1,
        speed: 400,
        direction: 'horizontal'
    };

    return (
        <IonSlides
            pager={true}
            options={slideOpts}
        >
            {freeGameList && freeGameList.map((freeGame, index) =>
                <IonSlide key={index}
                          style={{height: calculateHeightForSlide()}}>
                    <IonCard style={{height: calculateHeightForCard()}}>
                        <img alt={freeGame?.title}
                             src={returnFreeGameImage(freeGame, "Wide")}
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
                            {freeGame?.description.length > calculateLengthForDescription() ?
                                <>
                                    `${freeGame?.description.substring(0, calculateLengthForDescription())}...`
                                    <br/>
                                    <a onClick={() => openModalAction(index)}>
                                        Read More
                                    </a>
                                </>
                                : freeGame?.description
                            }
                        </IonCardContent>
                        {freeGame?.productSlug &&
                            <IonButton fill="outline" onClick={() => {
                                window.open(`https://store.epicgames.com/p/${freeGame?.productSlug}`);
                            }}>
                                Go to Epic Store
                            </IonButton>
                        }
                    </IonCard>
                </IonSlide>
            )}
        </IonSlides>
    );
};

export default SwipeComponent;
