export const getGifs = async (search) => {
  const apikey = "j7eJK2bmRtK5kLmEyyPzIPZJPRwkIPvi";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${search}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs)
  return gifs;
};

