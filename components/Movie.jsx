import React from "react";
import { useRouter } from "next/router";
import style from "./movie.module.css";

export function Movie({ selectedMovie }) {
    console.debug(selectedMovie, 'selected');
    const router = useRouter();
    const url = '';
    return <div className={style.movieDetails} key={selectedMovie.imdbID}>
        <div className={style.movie}>
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
            <div className={style.movieInfo}>
                <h2 >{selectedMovie.Title}</h2>
                <span className={style.movieYear}>
                    <p >
                        <b>Year: </b>{selectedMovie.Year}
                    </p>
                </span>
                <span className={style.movieRuntime}>
                    <p ><b>Runtime:</b> {selectedMovie.Runtime}</p>
                </span>
                <span className={style.movieGenre}>
                    <p ><b>Genre:</b> {selectedMovie.Genre}</p>
                </span>
                <span className={style.movieLanguage}>
                    <p ><b>Language:</b> {selectedMovie.Language}</p>
                    <p ><b>Country:</b> {selectedMovie.Country}</p>
                </span>
                <span className={style.movieAwards}>
                    <p ><b>Awards:</b> {selectedMovie.Awards}</p>
                </span>
                <span className={style.movieActors}>
                    <p ><b>Actors:</b> {selectedMovie.Actors}</p>
                </span>
                <span className={style.movieRating}>
                    <p >
                        <b>Rating:</b> {selectedMovie.imdbRating}
                    </p>
                </span>
            </div>
            <a href="/">
                <button>
                    ❌
                </button>
            </a>
        </div>
        {/* <button className={style.button}
            type="button" onClick={() => router.push('../')}>
            Закрыть
        </button> */}
    </div>



}