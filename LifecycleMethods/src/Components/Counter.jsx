import React, { Component } from 'react'

export default class extends Component {
    componentDidUpdate(prevProps,prevState){
        if(prevProps.number !== this.props.number){
            console.log("Component updated");
            
        }
    }
  render() {
    return (
      <div>{this.props.number}</div>
    )
  }
}
