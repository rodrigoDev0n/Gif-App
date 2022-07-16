import React from 'react'

export const GifGridItm = ({ url, title }) => {
  return (
    <div className='card-container'>
        <div className='gif-container'> 
          <img src={url} />
        </div>
    </div>
  )
}
