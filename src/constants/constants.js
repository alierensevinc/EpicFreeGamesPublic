export const requestUrl = (region) => {
    return `https://us-central1-free-epic-games.cloudfunctions.net/getEpicFreeGames?region=${region}`;
}

export const getCurrentEpicFreeGamesUrl = (region) => {
    return `https://us-central1-free-epic-games.cloudfunctions.net/getCurrentEpicFreeGames?region=${region}`;
}

export const getNextEpicFreeGamesUrl = (region) => {
    return `https://us-central1-free-epic-games.cloudfunctions.net/getNextEpicFreeGames?region=${region}`;
}


export const regionList = [
    {
        name: 'Turkey',
        slug: 'TR'
    },
    {
        name: 'United States',
        slug: 'US'
    },
    {
        name: 'Great Britain',
        slug: 'GB'
    },
    {
        name: 'Germany',
        slug: 'DE'
    },
    {
        name: 'Argentina',
        slug: 'AR'
    },
    {
        name: 'Spain',
        slug: 'ES'
    },
    {
        name: 'Mexico',
        slug: 'MX'
    },
    {
        name: 'France',
        slug: 'FR'
    },
    {
        name: 'Italy',
        slug: 'IT'
    },
    {
        name: 'Japan',
        slug: 'JP'
    },
    {
        name: 'South Korea',
        slug: 'KR'
    },
    {
        name: 'Poland',
        slug: 'PL'
    },
    {
        name: 'Brazil',
        slug: 'BR'
    },
    {
        name: 'Russia',
        slug: 'RU'
    },
    {
        name: 'Thailand',
        slug: 'TH'
    },
    {
        name: 'China',
        slug: 'CN'
    },
];