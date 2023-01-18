import React from "react"
import Header from "./components/Header"
import Robos from "./components/Robos"
import Loader from "./components/Loader"
import Scroll from "./components/Scroll"
import ErrorBoundary from './components/ErrorBoundary'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ""
    }
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => this.setState({ robots: users }))
    }, 2000)
  }

  searchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    if (this.state.robots.length === 0) {
      return <Loader />
    } else {
      const filteredRobots = this.state.robots.filter((robot) => {
        return robot.name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase())
      })
      return (
        <div className="App">
          <Header searchChange={this.searchChange} />
          <Scroll>
            <ErrorBoundary>
            <Robos robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
  }
}

export default App
