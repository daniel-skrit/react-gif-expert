import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export default function GifExpertApp() {
    
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory newCategory={onAddCategory}></AddCategory>
      {categories.map((category) => (
        <GifGrid category={category} key={category}></GifGrid>
      ))}
    </>
  );
}
