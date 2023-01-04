// noinspection JSIgnoredPromiseFromCall

import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {getCurrentEpicFreeGamesUrl, getNextEpicFreeGamesUrl, regionList, requestUrl} from "../constants/constants";
import {useIonLoading} from "@ionic/react";
import {useStorage} from "./StorageContext";

// This is the main Context
export const ApiContext = React.createContext({});

// This is the main Hook
export const useApi = () => {
    const {
        setSelectedRegion,
        getSelectedRegion,
    } = useStorage();
    const [present, dismiss] = useIonLoading();
    const [region, setRegion] = useState<any>({slug: null});
    const [freeGameList, setFreeGameList] = useState<any>();

    useEffect(() => {
        onGetRegion();
    }, []);

    const onGetRegion = () => {
        getSelectedRegion().then(res => {
            if (res) {
                const selectedRegion = regionList.find(region => region.slug === res);
                setRegion(selectedRegion);
            } else {
                setRegion(regionList[0]);
            }
        }).catch(err => {
            console.log("onGetRegion Error", err);
        });
    }

    const onChangeRegion = (regionSlug) => {
        setSelectedRegion(regionSlug).then(res => {
            setRegion(regionList.find(region => region.slug === res));
        }).catch(err => {
            console.log("onChangeRegion Error", err);
        });
    }

    const getCurrentEpicFreeGames = (region) => {
        present({
            message: 'Loading...',
        });
        axios.get(getCurrentEpicFreeGamesUrl(region)).then(function (res) {
            setFreeGameList(res.data);
            dismiss();
        }).catch(err => {
            console.log("getCurrentEpicFreeGames Error", err);
            dismiss();
        });
    }

    const getNextEpicFreeGames = (region) => {
        present({
            message: 'Loading...',
        });
        axios.get(getNextEpicFreeGamesUrl(region)).then(function (res) {
            setFreeGameList(res.data);
            dismiss();
        }).catch(err => {
            console.log("getNextEpicFreeGames Error", err);
            dismiss();
        });
    }

    useContext(ApiContext);

    return {
        region,
        freeGameList,
        onGetRegion,
        onChangeRegion,
        getCurrentEpicFreeGames,
        getNextEpicFreeGames
    };
}