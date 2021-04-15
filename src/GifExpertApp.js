import {React,useState} from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';
export const GifExpertApp = () => {
    //const categorias = ['One Punch','Samurai X','Dragon Ball'];
    const [categorias,setCategorias] = useState(['One Punch'])
    //const handleAdd = () => {
        //Modo 1
        //setcategorias sirve para cxambiar el estado del hook
        //setCategorias([...categorias,'Naruto']);
        //Al inicio
        //setCategorias(['Naruto',...categorias]);
        //Modo 2
        //setCategorias(cate => [...cate,'Naruto']);
    //}
    return(
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias}/>
        <hr></hr>
        <ol>
            {
                //codigo inicial  
               /* categorias.map(category => {
                    return <li key={category}>{category}</li>
                })  */
                //Modificacion de codigo 
                 categorias.map(category => (
                    <GifGrid
                        key={category} 
                        category={category}
                    />
                 ))
            }
        </ol>
      </>
    )
}
//el export de abajo no sirve con la destructuracion
//export default GifExpertApp;