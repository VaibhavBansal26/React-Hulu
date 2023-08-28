import React, { useEffect, useState } from 'react';
import './Result.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move'
// import requests from './request';

function Result({selectedOption}) {
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(selectedOption);
            setMovies(req.data.results);
            return req;
        }

        fetchData()

    },[selectedOption])
    return (
        <div className="result">
            <FlipMove>
                {movies.map((movie) =>(
                    <VideoCard key={movie.id} movie={movie}/>
                ))}

            </FlipMove>
        </div>
    )
}

export default Result
