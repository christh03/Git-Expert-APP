export const getGift = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JAbSRagd2i7rAyc478PuwjHb7HE0QFiH&q=${category}&limit=20`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Sorry something went wrong ");
    const { data } = await response.json();

    const gift = data.map((img) => ({
      id: img.id,
      url: img.images.downsized_medium.url,
      title: img.title,
    }));

    console.log(gift);

    return gift;
  } catch (err) {
    console.error(`Sorry something went wrong ${err}`);
  }
};
