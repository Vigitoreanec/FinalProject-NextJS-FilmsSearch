import React from "react";

export function Movie({id, title, year, img, type}) {
    return <div className="card">
                <div className="movies ">

                <img src={img} alt={title} />
                    <div className="info">
                        <span className="title">
                            <p>
                                {title}
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
            </div>
        
        
    
}