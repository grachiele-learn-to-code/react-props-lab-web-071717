// Code The Spaceship Component Here
import React from 'react'


class Spaceship extends React.Component {
  render() {
    return (<div>
      <h1>{this.props.name}</h1>
      <p>{this.props.speed}</p>
      <p>{this.props.hasRockets}</p>
      <p>{this.props.colors}</p>
    </div>)
  }

}

Spaceship.defaultProps = {
  hasRockets: false,
  speed: 'slow',
  colors: ['black', 'red']
}
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])

export default Spaceship
