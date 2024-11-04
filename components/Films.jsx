import React from "react";
import Skeleton from "./Skeleton";
// import { Movie } from "./Movie";
import styles from "../pages/styles.module.css";

export function Films({ films, isLoading, search, onChangeSearch }) {
    console.debug(search);
    return <>
        <div>
            <input type="text" placeholder="Поиск" value={search} onInput={onChangeSearch} />
            <button>Поиск</button>
        </div>
        {isLoading ? (
            <div className="skeleton-list">
                <Skeleton />

            </div>
        ) : (
            <div className={styles.container}>
                {films.filter((obj) => {
                    return obj.Title.toLowerCase().includes?.(search.toLowerCase()) || obj.Year.includes?.(search) || obj.typeLabel.toLowerCase().includes?.(search.toLowerCase());
                }).map((obj) => (

                    // <Movie key={obj.imdbID} {...obj} />
                    //---------------------
                    <div className="card">
                        <div className="movie" key={obj.imdbID}>

                            <img src={obj.Poster} alt={obj.Title} />
                            <div className="info">
                                <span className="title">
                                    <p>
                                        Title: {obj.Title}
                                    </p>
                                </span>
                                <span className="year">
                                    <p>
                                        Year: {obj.Year}
                                    </p>
                                </span>
                                <span className="type">
                                    <p>
                                        Type: {obj.typeLabel}
                                    </p>
                                </span>
                            </div>
                        </div>
                        <button>Просмотр</button>
                    </div>
                    //-------------------------
                    // <Movie
                    // id = {obj.imdbID}
                    // title = {obj.Title}
                    // year = {obj.Year}
                    // img = {obj.Poster}
                    // type = {obj.Type}/>
                )
                )}
            </div>
        )}
    </>
}