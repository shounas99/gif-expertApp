import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['Universe'])

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return 
    
    // categories.push(newCategory) //- Con push muta el estado, algo que con react NO quiero o deberia usar, por eso aqui hay que tratar de evitar usarlo
    //uso setCategories lo llamo cuando quiero cambiar las categorias
    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory = { (event) => onAddCategory(event) }
      />

      { 
        categories.map( ( category ) => (
          <GifGrid 
            key={ category } 
            category={ category }
          />
        )) 
      }
    </>
  )
}
