import React from 'react';

function YoutubeItem(props){
    return (
        <li>
            <a href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`}>
                <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
                <p className='title'>{props.video.snippet.title}</p>
            </a>
        </li>
    )
}
function YoutubeList(props) {
    console.log(props)
  return (
    <div className="youtube__list container">
        <ul>
            {props.videos.map((list, index) => (
                <YoutubeItem key={index} video={list} />
            ))}
        </ul>
    </div>
  )
}
export default YoutubeList