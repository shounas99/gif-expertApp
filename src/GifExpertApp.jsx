import { useState } from "react"

export const GifExpertApp = () => {

  const [ categories, setcategories ] = useState(['Jonas Brothers', 'Imagine Dragons'])
  const onAddCategory = () => {
    // categories.push('Twenty one pilots') //- Con push muta el estado, algo que con react NO quiero o deberia usar, por eso aqui hay que tratar de evitar usarlo
    //uso setCategories lo llamo cuando quiero cambiar las categorias
    setcategories([...categories, 'Twenty one pilots']) //1st
    // setcategories( cat => [...cat, 'Twenty One pilots']) //2nd
  }

  return (
    <>
    {/* title */}
        <h1>GifExpertApp</h1>
    {/* input */}
    <button onClick={ onAddCategory } >Agregar</button>

    {/* gif list */}
    <ol>
      { 
        categories.map( cat => {
          return <li key={ cat }>{ cat }</li>
        }) 
      }
      {/* <li>ABC</li> */}
    </ol>
        {/* gif item */}
    </>
  )
}
