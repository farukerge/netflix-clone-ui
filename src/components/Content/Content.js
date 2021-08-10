import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../HeroSection/axios'
import styles from './Content.module.css'

function Content({ title, fetchUrl, isLargeRow = false }) {

    const [movies, setMovies] = useState([])
    
    const movie_url = "https://image.tmdb.org/t/p/original/"


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>


            <div className={styles.content__posters}>
                 {movies.map(movie => (
                     <img key={movie.id} className={styles.content__poster} src={`${movie_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="" />
                 ))}
           </div>

        </div>
    )
}

export default Content
