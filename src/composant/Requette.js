import React,{useState,createContext, useEffect} from "react";

export const PosterContext = createContext("");

const RequetteProvider = (props) => {
    const [datarequete, setdatarequete] = useState({movies:[{poster: "https://pictures.betaseries.com/films/affiches/original/119053.jpg"},{title: "Thor: Love and Thunder"}]});
    const [titreData, setTitreData] = useState("")
    
    useEffect(() =>{
    
        fetch(`https://api.betaseries.com/movies/search?title=${titreData}&key=e66bfe80fdf2&nbpp=20`)
                .then(response => response.json())
                .then(data => {setdatarequete(data)})
                .catch((error) => console.log(error));
              
    },[titreData])
       

return(<>

<PosterContext.Provider value= {{datarequete, setTitreData, setdatarequete}}>
                    {props.children}
                </PosterContext.Provider>
    {console.log(titreData)}{console.log(datarequete)}
                </>
)
}
export default RequetteProvider;