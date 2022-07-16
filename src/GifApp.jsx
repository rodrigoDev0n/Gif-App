import {React, useState} from 'react'
import { GifGrid, AddCategory } from './components';

export const GifApp = () => {

  const [categories, setcategories] = useState([]);

  const onAddCategory = (newCategory) => {
    categories.find(e => e.toLocaleLowerCase() === newCategory)
    ? setcategories([...categories])
    : setcategories([newCategory,...categories]);

  }

  return (
    <>
        <h1> Gif APP </h1>
        <AddCategory 
          onNewCategory={onAddCategory}
        />
        { categories.map( c => <GifGrid key={c} categories={c}/> ) }
    </>
  )
}
