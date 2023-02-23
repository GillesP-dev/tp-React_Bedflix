import React,{useState,useContext} from "react";
import loupe from "../images/loupewhite.png";
import imageCloche from "../images/Vector(4).png";
import imageCompte from "../images/Rectangle 3.png";
import { PosterContext } from "./Requette";



function Recherche(){
 const {datarequete, setTitreData} = useContext(PosterContext);



function handelChanges(e){ if(e.keyCode === 13){
    let valeurTitre= e.target.value;
    setTitreData(valeurTitre);
    
    
}}

  
 
 
 
    return(
        <>
        <div id="champRech1">
                    <div className="border border-2 p-1 rounded-pill">
                        <img src={loupe} alt="loupewhite" />
                        <input  id="champRech" type="text" placeholder="Titre, Genres,..." className="inputrecherche  w-75" onKeyDown={handelChanges} />
                    </div>
        </div>
                <img className="bell ms-3" src={imageCloche} alt="bell"/>
                <img className="profil ms-3 me-5 " src={imageCompte} alt="profil"/>
              
                
                </>
    )
        


}



export default Recherche;