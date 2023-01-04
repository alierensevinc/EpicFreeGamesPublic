import * as functions from "firebase-functions";

const {getGames} = require("epic-free-games");
const cors = require('cors')({origin: true});

export const getEpicFreeGames = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        getGames(request.query.region, true).then(res => {
            functions.logger.info(res, {structuredData: true});
            response.send(res);
        }).catch(err => {
            functions.logger.info(err, {structuredData: true});
            response.send(err);
        });
    })
});

export const getCurrentEpicFreeGames = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        getGames(request.query.region, true).then(res => {
            functions.logger.info(res.currentGames, {structuredData: true});
            response.send(res.currentGames);
        }).catch(err => {
            functions.logger.info(err, {structuredData: true});
            response.send(err);
        });
    })
});

export const getNextEpicFreeGames = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        getGames(request.query.region, true).then(res => {
            functions.logger.info(res.nextGames, {structuredData: true});
            response.send(res.nextGames);
        }).catch(err => {
            functions.logger.info(err, {structuredData: true});
            response.send(err);
        });
    })
});