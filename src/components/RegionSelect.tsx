import React from 'react';
import {IonSelect, IonSelectOption} from '@ionic/react';
import {regionList} from "../constants/constants";
import "./RegionSelect.css";

const RegionSelectComponent: React.FC<any> = ({onChangeRegion, region}) => {
    return (
        <div className="container">
            {
                region.slug &&
                <div className={"select-container"}>
                    <IonSelect interface="popover"
                               placeholder="Select region"
                               onIonChange={(e) => onChangeRegion(e.detail.value)}
                               value={region.slug}
                    >
                        {
                            regionList && regionList.map(region =>
                                <IonSelectOption key={region.slug}
                                                 value={region.slug}
                                >
                                    {region.name}
                                </IonSelectOption>
                            )
                        }
                    </IonSelect>
                </div>
            }
        </div>
    );
};

export default RegionSelectComponent;
