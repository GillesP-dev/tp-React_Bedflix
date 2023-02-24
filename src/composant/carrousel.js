import React,{useContext,useState,createContext} from "react";
import images1 from "../images/card-1.png";
import {PosterContext} from "./Requette";
import FenetreFilm from "./fenetreFilm";
import { Link } from 'react-router-dom';

export const AffiDataContext = createContext("");

function Carrousel(){
    const[currentSlide, setCurrentSlide] = useState(0);
    const {datarequete,setdatarequete, setIdImage} = useContext(PosterContext) ;
    
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? data.length-1 : prev -1));
    };
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === data.length-1 ? 0 : prev +1));
    };
    let data = datarequete.movies;
    
    
    function recupeID(e){
        let id = e.target.id
         setIdImage(id);
              
    }
    data.map((movie,index) => 
    console.log(movie)
    )
    return(
        <>
         <div className="wrapper">
         <section id="section1">
         <a href="#section3" className="arrow__btn" onClick={prevSlide}>‹</a>
                       {data.map((movie,index) =>
                            movie.poster !== null && movie.poster !== '' ? 
                            
                            <div className={index === currentSlide?"item active":"item"} key={index}>
                                
                                    <div className="movie">
                                    <Link key={index} to={"/films/"+movie.id}>
                                        <img id={movie.id}src={movie.poster} alt={movie.title} className="imgMovies" onClick={recupeID}/>
                                    </Link>
                                    </div>
                                </div>
                             : null
                        )}
                        <a href="#section2" className="arrow__btn" onClick={nextSlide}>›</a>
                    </section>
        </div>
    <div className="">
        <div className="bg-black" >
            <div className="col-12">
                <div className="position-relative">
                    <p className="position-absolute">
                        Séries demandées
                    </p>
                </div>
            </div>
        </div>
    </div>
    
                    
        </>

    )
}

export default Carrousel;