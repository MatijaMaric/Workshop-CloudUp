export function getRandomGiphy(query?: string) {
    let httpQuery = 'api_key=dc6zaTOxFJmzC';
    if (query) {
        httpQuery += '&tag=' + query;
    }

    return fetch(`https://api.giphy.com/v1/gifs/random?${httpQuery}`)
        .then(response => {
            return response.json();
        })
        .then(giphy => {
            return Promise.resolve(giphy.data.images.original.url);
        });
}