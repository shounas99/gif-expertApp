import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({ category }) => {

    //estado local - para mantener las imagenes
    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs( category )
        setImages( newImages )
    }

    useEffect(() => {
        getImages()
        // getGifs(category)
        //     .then( newImages => setImages(newImages)); // se utiliza the porque no puedo agregar un async en un hook, porque estas son funciones NO promesas
    }, [])

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                { 
                    images.map( ( image ) => (
                        <GifItem
                            key={ image.id }
                            { ...image } // se usa cuando tengo muchas propiedades y no quiero agregar una por una
                            // title={ image.title }
                            // url={ image.url }
                        />
                    )) 
                }
            </div>
        </>
    )
}
