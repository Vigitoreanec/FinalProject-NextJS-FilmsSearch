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
                    <div className={styles.card}>
                        <div className={styles.movie} key={obj.imdbID}>

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
                )}
            </div>
        )}
    </>
}