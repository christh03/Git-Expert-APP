import { useFetchGift } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { IsLoading } from "./IsLoading";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGift(category);

  return (
    <>
      <IsLoading isLoading={isLoading} />
      <h2>{category}</h2>
      <div className="card-grid ">
        {images.map((images) => (
          <GifItem id={images.id} {...images} />
        ))}
      </div>
    </>
  );
};
