import './styles.module.css';
import React, { useEffect, useState } from "react";
import { Films } from "../components/Films";


export default function HomePage() {
    const
        [films, setFilms] = useState(null),
        [isLoading, setLoading] = useState(true),
        [search, setSearch] = useState('');

    useEffect(() => {

        fetch('https://www.omdbapi.com/?s=top&apikey=ed6493c6')
            .then(res => res.json())
            .then((json) => {
                const formatFilms = json.Search.map(item => ({
                    ...item,
                    // ----> typeLabel
                    typeLabel: item.Type == 'movie' ? 'Фильм' :
                        (item.Type == 'series' ? 'Сериал' : item.Type)
                }));
                setFilms(formatFilms);
            })
            .catch((err) => {
                console.debug(err);
                alert('Ошибка получения Данных');
            })
            .finally(() => setLoading(false));
    }, []);

    const onChangeSearch = (event) => { setSearch(event.target.value); }

    return <div className="App">

        <Films films={films} isLoading={isLoading} search={search} onChangeSearch={onChangeSearch}/>
    </div>;
}
