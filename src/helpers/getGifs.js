export const getGifs = async(category) =>{
    const url = `api.giphy.com/v1/gifs/search?api_key=Dfc53ziq3QwMa9YyR4iG66WyB4Ey647v&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log("AQUI");
    console.log(data)
    const gifs = data.map(img=>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
  }
  