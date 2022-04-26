import React from 'react';

function MovieItem(props){
    return (
        <li>
            <a href={`https://www.themoviedb.org/movie/${props.video.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${props.video.poster_path}`} alt={props.video.title} />
                <p className='title'>{props.video.overview}</p>
            </a>
        </li>
    )
}
function MovieList(props) {
    console.log(props)
  return (
    <div className="movie__list container">
        <ul>
            {props.videos.map((list, index) => (
                <MovieItem key={index} video={list} />
            ))}
        </ul>
    </div>
  )
}
export default MovieList