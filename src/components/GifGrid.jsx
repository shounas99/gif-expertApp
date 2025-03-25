import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    //new customHook by me - principio DRY - Don't Repeat Yourself
    const { images, isLoading } = useFetchGifs( category );

    console.log('fetch gifs -', {isLoading});
    

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
            }
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
