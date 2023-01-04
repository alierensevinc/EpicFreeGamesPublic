import moment from "moment";

export const returnFreeGameImage = (freeGame, orientation) => {
    if (!freeGame) {
        return null;
    }
    let returnUrl = "";
    const freeGameImgList = freeGame?.keyImages.map(f => {
        return {type: f.type, url: f.url}
    });
    freeGameImgList.forEach(f => {
        if (f.type.indexOf(orientation) > 0) {
            returnUrl = f.url;
        }
    });
    return returnUrl;
}

export const returnFreeGameDate = (freeGame) => {
    if (freeGame?.promotions.upcomingPromotionalOffers[0]) {
        return `${moment(freeGame?.promotions.upcomingPromotionalOffers[0]?.promotionalOffers[0]?.startDate)
            .format('DD.MM.YYYY HH:mm')}-
            ${moment(freeGame?.promotions.upcomingPromotionalOffers[0]?.promotionalOffers[0]?.endDate)
            .format('DD.MM.YYYY HH:mm')}`;
    } else {
        return `${moment(freeGame?.promotions.promotionalOffers[0]?.promotionalOffers[0]?.startDate)
            .format('DD.MM.YYYY HH:mm')}-
            ${moment(freeGame?.promotions.promotionalOffers[0]?.promotionalOffers[0]?.endDate)
            .format('DD.MM.YYYY HH:mm')}`;
    }
}
