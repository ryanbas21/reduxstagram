import React, { Component } from 'react'
import { Link } from 'react-router'

class Main extends Component {
  render() {
    return (
    <div>
     <Link to='/'><h1>Reduxstagram</h1></Link>
     {React.cloneElement(this.props.children,this.props)}
    </div>
   )
  }
}

export default Main;
