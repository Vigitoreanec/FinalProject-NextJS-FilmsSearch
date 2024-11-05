import './styles.module.css';
import React, { useEffect, useMemo, useState } from "react";
import { Films } from "../components/Films";


export default function HomePage() {
    const
        [films, setFilms] = useState(null),
        [isLoading, setLoading] = useState(true),
        [search, setSearch] = useState(''),
        apikey = "ed6493c6",
        textSearch = "top",
        url = useMemo(() => new URL(`https://www.omdbapi.com/?s=${textSearch}&apikey=` + apikey), [apikey]);
    console.debug(url);
    useEffect(() => {
        async function getData() {
            const respons = await fetch(url)
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
        }
        getData();
    }, []);

    const onChangeSearch = (event) => { setSearch(event.target.value); }

    return <div className="App">

        <Films films={films} isLoading={isLoading} search={search} onChangeSearch={onChangeSearch} />
    </div>;
}
