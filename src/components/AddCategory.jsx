
import { useState } from 'react';



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        
        setInputValue (target.value);
    }

    const onSubmit =(event) =>{
        event.preventDefault();
      if (inputValue.trim().length <=1) return; //esta línea es para que en el buscador no se inserte busqueda vacía, debe tener por lo menos un caracter

      onNewCategory(inputValue.trim());
        setInputValue('');// esta línea es para que, se elimine las palabras del buscador y quede vacío para las busquedas
         
    }

  return (

    <form onSubmit={onSubmit}>
    <input
    type="text"
    placeholder="buscar gifs"
    value={inputValue} 
    onChange={ onInputChange }
    />
    </form>
  )
}
