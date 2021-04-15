import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategorias}) => {
    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias(cate => [inputValue,...cate]);
            setInputValue('');
            console.log('Submit Hecho');
        }
        
        
    }
    return(    
        <form onSubmit={HandleSubmit}>
            <h2>Añadir categoria</h2>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </form>        
    )
}
AddCategory.propTypes = {
    setCategorias:PropTypes.func.isRequired
}