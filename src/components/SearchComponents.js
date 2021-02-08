import React, { useState } from 'react';

function SearchMovies() {

    const [query, setQuery] = useState('');

    const searchMovies = async (event) => {
        event.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=8de257bc1c81f081807fb95847926557&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park" />
            <button className="button" type="submit">Search</button>
        </form>
    );
}

export default SearchMovies;