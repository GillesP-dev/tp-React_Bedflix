import React,{useContext} from "react";
import images1 from "../images/card-1.png";
import {PosterContext} from "./Requette";



function Carrousel(){
    const {datarequete,setdatarequete} = useContext(PosterContext) ;
   

 
 
  let data = datarequete.movies;
  
  console.log(datarequete.movies);
 

    return(
        <>
         <div className="wrapper">
         <section id="section1">
         <a href="#section3" className="arrow__btn">‹</a>
                        {data.map((movie, index) =>
                            movie.poster !== null && movie.poster !== '' ? (
                                <div className="item" key={movie.id}>
                                    <div className="movie">
                                        <img src={movie.poster} alt={movie.title} className="imgMovies" />
                                    </div>
                                </div>
                            ) : null
                        )}
                        <a href="#section2" className="arrow__btn">›</a>
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