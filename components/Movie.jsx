import React from "react";

export function Movie({ selectedMovie }) {
    console.debug(selectedMovie, 'selected');
    return <div className="movie-details" key={selectedMovie.id}>
        <h2>{selectedMovie.Title}</h2>
         {/*<div className="movies">

            <img src={movie.img} alt={movie.title} />
            <div className="info">
                <span className="title">
                    <p>
                        Title: {movie.title}
                    </p>
                </span>
                <span className="year">
                    <p>
                        {year}
                    </p>
                </span>
                <span className="type">
                    <p>
                        {type}
                    </p>
                </span>
            </div>
        </div>
        <button >Закрыть</button> */}
    </div>



}