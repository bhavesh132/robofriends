import React from "react"
import "./robo.css"

const Header = (props) => {
  return (
    <div className="heading">
      <h1>ROBOFRIENDS</h1>
      <br />
      <input type="text" placeholder="Enter Searh Text" className="search-box" onChange={props.searchChange} />
      <br /><br />
    
    </div>
  )
}

export default Header
