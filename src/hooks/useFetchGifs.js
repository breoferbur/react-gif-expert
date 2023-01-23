import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getGifs(category).then(newImg => {
            setImages(newImg)
            setIsLoading(false);
        });
    }, []);

    return {
        images,
        isLoading
    }
}
