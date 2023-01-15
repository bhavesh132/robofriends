import { Component } from "react"
import "./robo.css"

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img
          src={`https://robohash.org/${this.props.id}?200x200`}
          alt="Roboimage"
        />
        <div className="content">
          <h2>{this.props.name}</h2>
          <h4>{this.props.email}</h4>
        </div>
      </div>
    )
  }
}

export default Card
