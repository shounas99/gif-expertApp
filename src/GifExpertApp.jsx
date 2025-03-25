import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['Jonas Brothers', 'Imagine Dragons'])

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return 
    
    // categories.push(newCategory) //- Con push muta el estado, algo que con react NO quiero o deberia usar, por eso aqui hay que tratar de evitar usarlo
    //uso setCategories lo llamo cuando quiero cambiar las categorias
    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
    {/* title */}
        <h1>GifExpertApp</h1>
    {/* input */}
    <AddCategory 
      onNewCategory = { (event) => onAddCategory(event) }
    />
    {/* gif list */}

    <ol>
      { 
        categories.map( (cat) => {
          return <li key={ cat }>{ cat }</li>
        }) 
      }
      {/* <li>ABC</li> */}
    </ol>
        {/* gif item */}
    </>
  )
}
