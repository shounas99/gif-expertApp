import { useState } from "react"

export const GifExpertApp = () => {

  const [ categories, setcategories ] = useState(['Jonas Brothers', 'Imagine Dragons'])
  console.log('Categories - ', categories);
  

  return (
    <>
    {/* title */}
        <h1>GifExpertApp</h1>
    {/* input */}

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
