import React from 'react'
import Searcher from './Searcher'

function Button({ type, buttonHandler, searchHandler, searchText, setSearchText }) {
  return (
    <div className="button-case">
      {type === 'random' ?
        <div className="random-wrapper">
          <div className="random-text">RANDOM</div>
          <button className="button button-random" onClick={buttonHandler}>
            🎲 🎲
          </button>
        </div>
        : type === 'search' ?
          <div className="random-wrapper">
            <Searcher setSearchText={setSearchText} searchText={searchText} />
            <button className="button button-search" onClick={searchHandler}>
              🔎
            </button>
          </div>
          : ''

      }
    </div>
  )
}

export default Button