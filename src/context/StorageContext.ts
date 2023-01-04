import React, {useContext} from "react";
import {Storage} from '@ionic/storage';

// This is the main Context
export const StorageContext = React.createContext({});

// This is the main Hook
export const useStorage = () => {
    const storage = new Storage();
    // noinspection JSIgnoredPromiseFromCall
    storage.create();

    const setSelectedRegion = (region) => {
        return storage.set('region', region);
    }

    const getSelectedRegion = () => {
        return storage.get('region');
    }

    useContext(StorageContext);

    return {
        setSelectedRegion,
        getSelectedRegion,
    };
}