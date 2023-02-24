import React,{useState} from "react";
import Carrousel from "./carrousel";

function CorpsAccueil(){
const [background, setBackground] = useState("accueil");



    return(
        <>
        <div className={background}>
        
        </div>
        
        </>
    )
}

export default CorpsAccueil;