import React, { useCallback, useMemo, useState } from "react";
import Skeleton from "./Skeleton";
import { Movie } from "./Movie";
import styles from "../pages/styles.module.css";

export function Films({ films, isLoading, search, onChangeSearch }) {
    const
        apikey = "ed6493c6",
        [selectedMovie, setSelectedMovie] = useState(null);

    console.debug(search);

    const movieClick = async (id) => {
        setSelectedMovie(null);
        try {
            const url = `https://www.omdbapi.com/?apikey=${apikey}&i=${id}`;
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) throw new Error(response.status);
            setSelectedMovie(data);
        } catch (error) {
            console.error('Ошибка:', error);
        }
        
    };

    // const handleMovieClick = async (id) => {
    //     try {
    //         const response = await fetch(
    //             `https://www.omdbapi.com/?i=${id}&apikey=${key}`
    //         );
    //         const data = await response.json();
    //         setSelectedMovie(data);
    //     } catch (error) {
    //         console.error('Ошибка:', error);
    //     }
    // };

    return <>
        <div>
            <input type="text" placeholder="Поиск" value={search} onInput={onChangeSearch} />

        </div>
        {isLoading ? (
            <div className="skeleton-list">
                <Skeleton />

            </div>
        ) : (
            <div className={styles.container}>
                {selectedMovie ? (
                    <Movie selectedMovie={selectedMovie} />
                ) : (

                    (films.filter((obj) => {
                        return obj.Title.toLowerCase().includes?.(search.toLowerCase()) || obj.Year.includes?.(search) || obj.typeLabel.toLowerCase().includes?.(search.toLowerCase());
                    }).map((obj) => (

                        // <Movie key={obj.imdbID} {...obj} />
                        //---------------------
                        <div className={styles.card} key={obj.imdbID} onClick={() => movieClick(obj.imdbID)}>

                            <div className={styles.movie} >

                                <img className={styles.img} src={obj.Poster} alt={obj.Title} />
                                <div className={styles.info}>
                                    <span className={styles.title}>
                                        <p className={styles.p}>
                                            Title: {obj.Title}
                                        </p>
                                    </span>
                                    <span className={styles.year}>
                                        <p className={styles.p}>
                                            Year: {obj.Year}
                                        </p>
                                    </span>
                                    <span className={styles.type}>
                                        <p className={styles.p}>
                                            Type: {obj.typeLabel}
                                        </p>
                                    </span>
                                </div>
                            </div>


                        </div>
                        //-------------------------
                        // <Movie
                        // id = {obj.imdbID}
                        // title = {obj.Title}
                        // year = {obj.Year}
                        // img = {obj.Poster}
                        // type = {obj.Type}/>
                    )
                    )
                    )

                )}
            </div>
        )}
    </>
}