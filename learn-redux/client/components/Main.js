import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import PhotoGrid from './PhotoGrid'
import Single from './Single'
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
