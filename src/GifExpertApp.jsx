import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);


  const onAddCategory = (valor = "Valorant")=>{
    setCategories(c=>[...c,"Valorant"]);
  }
  return (
    <>
      {/* tituklo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory></AddCategory>
    {/* Listado de Gif */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
        {categories.map(
            category=>{
                return<li ke={category}>{category}</li>
            }
        )}
    </ol>
    {/* Gif Item */}
    </>
  );
};
