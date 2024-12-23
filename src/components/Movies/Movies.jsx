// import React, { useState } from 'react';
// import MovieItem from '../MovieItem/MovieItem';
// import './Movies.css';

// const Movies = () => {
//     const [movies, setMovies] = useState([
//         {
//             imdbID: 'tt3896198',
//             title: "Guardians of the Galaxy Vol. 2",
//             year: 2017,
//             poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
//         },
//         {
//             imdbID: 'tt0068646',
//             title: "The Godfather",
//             year: 1972,
//             poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
//         }
//     ]);

//     return (
//         <ul className="movies">
//             {movies.map((movie) => (
//                 <li className="movies__item" key={movie.imdbID}>
//                     <MovieItem {...movie} />
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default Movies;

import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = ({ movies, onAdd }) => {
    return (
        <ul className="movies">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem
                            title={movie.Title || movie.title}
                            year={movie.Year || movie.year}
                            poster={movie.Poster || movie.poster}
                            imdbID={movie.imdbID}
                            onAdd={onAdd}
                        />
                    </li>
                ))
            ) : (
                <p>No movies to display</p>
            )}
        </ul>
    );
};

export default Movies;