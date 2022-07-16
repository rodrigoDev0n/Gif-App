import { useState, useEffect} from "react";
import { getGifs } from "../helpers/getGifs";
// Creando un custom Hook:

export const useFetchGif = (categories) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getGifs(categories)
          .then(newImages => setImages(newImages));
          setisLoading(false);
    }, [])

    return {
        images,
        isLoading
    }
}
