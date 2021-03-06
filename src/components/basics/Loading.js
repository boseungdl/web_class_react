import React from 'react'

function Loading(props) {
  return (
    <div id={`loading`} className={`loading__active ${props.color}`}>
        <div className="loading">
          <div className={`loading__text ${props.color}`}>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        </div>
    </div>
  )
}

export default Loading