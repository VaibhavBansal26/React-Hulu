import React from 'react';
import './Nav.css';
import request from './request';

function Nav({setselectedOption}) {
    return (
        <div className="nav">
            <h2 onClick={() => setselectedOption(request.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setselectedOption(request.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setselectedOption(request.fetchTrending)}>Action</h2>
            <h2 onClick={() => setselectedOption(request.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setselectedOption(request.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={() => setselectedOption(request.fetchRomanticMovies)}>Romance</h2>
            <h2 onClick={() => setselectedOption(request.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setselectedOption(request.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={() => setselectedOption(request.fetchWestern)}>Western</h2>
            <h2 onClick={() => setselectedOption(request.fetchAnimation)}>Animation</h2>
            <h2 onClick={() => setselectedOption(request.fetchTV)}>TV Movie</h2>
        </div>
    )
}

export default Nav
