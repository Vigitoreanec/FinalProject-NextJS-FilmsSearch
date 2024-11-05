import React from "react";

export function Movie({ selectedMovie }) {
    console.debug(selectedMovie, 'selected');
    return <div className="movie-details" key={selectedMovie.id}>
        <h2>{selectedMovie.Title}</h2>
         <div className="movies">

            <img src={selectedMovie.img} alt={selectedMovie.title} />
            <div className="info">
                <span className="title">
                    <p>
                        Title: {selectedMovie.Title}
                    </p>
                </span>
                <span className="year">
                    <p>
                        Year: {selectedMovie.Year}
                    </p>
                </span>
                <span className="rating">
                    <p>
                        Rating: {selectedMovie.imdbRating}
                    </p>
                </span>
            </div>
        </div>
        <button >Закрыть</button>
    </div>



}