import filmsData from "./films.json";

export function getAllPosterPaths() {
    const allPaths = filmsData.map((data) => {
        return {
            params: {
                query: data.query,
            },
        };
    });
    return allPaths;
}

export function getPosterData(query: any) {
    const data = filmsData.find((item) => {
        return item.query === query;
    });

    return {
        query,
        ...data,
    };
}
