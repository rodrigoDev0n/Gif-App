// Obtiene los datos de los gifs

export const getGifs = async (categories) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uuyvLR3oqC70fDeGuNcNdhdEv96AFh67&q=${categories}&limit=6`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}