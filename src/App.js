
import React,{useContext} from 'react';
import './App.css';

import Series from './composant/Series';
import { Routes,Route } from 'react-router-dom';
import PagesAccueil from './composant/pagesAccueil'
import Navbarre from './composant/navbarre';
import RequetteProvider from './composant/Requette';
import Films from './composant/films';



function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
      <RequetteProvider>
        <Navbarre/>
        <Routes>
        <Route exact path="/" element={<PagesAccueil/>}/>
        <Route  path="/Series" element={<Series/>}/>
        <Route  path="/films" element={<Films/>}/>
        
        </Routes>
      </RequetteProvider>
      
      
      </header>
     
    </div>
    
  );
}

export default App;
