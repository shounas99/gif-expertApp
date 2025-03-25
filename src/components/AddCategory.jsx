import { useState } from 'react'

export const AddCategory = ( { onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        if( inputValue.trim().length <= 1 ) return // rules, can't write if value <= 1  
        // setCategories( categories => [ inputValue, ...categories])
        setInputValue('') //clean
        onNewCategory( inputValue.trim() )
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                placeholder="Search gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
