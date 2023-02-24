import React from 'react';
import CorpsAccueil from './corpsAccueil';
import Carrousel from './carrousel';
import FenetreFilm from './fenetreFilm';
import { useParams } from 'react-router-dom';




function Films() {
 const{id} = useParams() ;
  
  return (
    
      <>
      <FenetreFilm/>
      
      <Carrousel /></>
  );
}

export default Films;