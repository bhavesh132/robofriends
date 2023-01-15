import React from "react"
import Card from "./Card"


const Robos = (props) => {
  return (
    <div className="all-robos">
      {props.robots.map((item, i) => (
        <Card
          key={i}
          id={item.id}
          name={item.name}
          username={item.username}
          email={item.email}
        />
      ))}
    </div>
  )
}

export default Robos
