import {React, useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onInputChange = (e) => {
    setinputValue(e.target.value);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    inputValue 
    ? onNewCategory(inputValue.toLowerCase(),) 
    : setErrorMessage('Debes ingresar un parametro para buscar :c');
    
    setinputValue('');
  }

  return (
    <>
        <div className='input-container'>
          <form onSubmit={onSubmit}>
              <input
                  type="text"
                  placeholder="Busca un gif :D"
                  value={inputValue}
                  onChange={onInputChange}
              />
          </form>
        </div>
        <p>{errorMessage}</p>
    </>
  )
}
