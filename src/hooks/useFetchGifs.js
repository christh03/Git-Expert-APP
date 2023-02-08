import { useEffect, useState } from "react";
import { getGift } from "../Helpers/getGif";

export const useFetchGift = (category) => {
  const [images, setImg] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGift(category);
    setImg(newImages);
    setisLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
