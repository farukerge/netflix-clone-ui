import React from 'react'
import styles from './Hero.module.css'
import { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'


function Hero() {

    const [movies, setMovies] = useState([]);
     
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
           
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, []);

    console.log(movies);

    return (
        <div className={styles.hero}
            style={{

            backgroundImage :`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center ",
            backgroundRepeat:"no-repeat",
            
        }}>
            <div className={styles.container}>
                <h1 className={styles.title}>{movies.name}</h1>
            <div className={styles.buttons}>
                <button>Play</button>
                <button>My List</button>
            </div>
                <p className={styles.description}>{ movies.overview }</p>
            </div>
        </div>
    )
}

export default Hero
