import {useState} from 'react'

function Searcher({searchText, setSearchText}) {

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <form className="searcher">
      <input type="text" name="search" className="text-input" value={searchText ? searchText : ""} onChange={handleChange} />
    </form>
  )
}

export default Searcher