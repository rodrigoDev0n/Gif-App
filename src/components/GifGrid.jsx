import { React } from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItm } from './GifGridItm';

export const GifGrid = ({categories}) => {

  const { images, isLoading } = useFetchGif( categories ); 

  return (
    <>
        <hr/>
        <h1>{categories}</h1>
        <hr/>
        <div className='grid-container'>
          {
            isLoading 
            ? <p>cargando...</p>
            : images.map(i => {
              return <GifGridItm key={i.id} {...i} />
            })
          }
        </div>
    </>
  )
}
