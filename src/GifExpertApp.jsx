
import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory = (newCategory) =>{
    
    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    //setCategories (['Valorant', ...categories]);
  }
  
  return (
    
    <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>

         {/*input*/}
         <AddCategory 
         onNewCategory={(value)=>onAddCategory(value)}
         />
         
        {/* setCategories = {setCategories} /}   

          {/*listado de gif*/}
          {/*<button onClick={onAddCategory}>Agregar</button>*/}
        
            {
            categories.map ((category) => (
              <GifGrid key= {category} 
                        category={category}
              />
              
            ))
            }
          
             {/*gif item*/}
    </>
  )
}
