export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=8FZIHm9CO4uo4ARK5lflU4CY9kUTr2Pv&limit=10&q=${category}`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map(img => {
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs;
}