import { Fragment, useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (value) => {
    const setValue = value
      .split(" ")
      .map((item) => {
        const fistLetter = item.slice(0, 1).toUpperCase();
        const restLetters = item.slice(1).toLowerCase();
        return fistLetter + restLetters;
      })
      .join(" ");

    if (categories.includes(setValue)) return;

    setCategories((cat) => [setValue, ...cat]);
  };

  return (
    <Fragment>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </Fragment>
  );
};
