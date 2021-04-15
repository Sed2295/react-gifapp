import {React} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import {React, useState, useEffect} from 'react';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => { 
    //const [images,setImages] = useState([]);
    //con dos puntos renombramos
    const {data:images,loading} = useFetchGifs(category);
    console.log(images,loading);
       
    return(
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading ? 'Cragando...' : ''}
            <div className="card-grid">
                    {
                        
                    //     sin destructuracion
                    //     images.map(img => {
                    //         return <li key={img.id}>{img.title}</li>
                    //     }) 
                    //     con destructuracion 
                        
                    //  images.map(({id,title}) => {
                    //         return <li key={id}>{title}</li>
                    // }) 
                    images.map(img => {
                            return <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        })
                    }   
            </div> 
        </>
    )
}






