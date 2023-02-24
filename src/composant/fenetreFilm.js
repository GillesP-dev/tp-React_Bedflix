import React,{useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import {PosterContext} from './Requette'



function FenetreFilm(){
    const {idImage, datarequete} = useContext(PosterContext) ;
    let data = datarequete.movies;
    let titre ;
      let synopsis ;
      let poster ;
      let language ;
      let annee ;

      console.log(datarequete);


data.map(obj => {
    
    if(idImage == obj.id){

      titre = obj.title;
      synopsis = obj.synopsis;
      poster = obj.poster;
      language = obj.language;
      annee = obj.production_year;
      
    }
        
    

})
return(
<>

<div className='recap'>
    <img className='recapPoster' src={poster}></img>
    <div className='recapData'>
    <h1>{titre}</h1>
    <h2>{annee} {language}</h2>
    <p>{synopsis}</p></div>
</div>

</>
)
}
export default FenetreFilm;