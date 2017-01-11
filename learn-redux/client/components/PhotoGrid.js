import React, { Component } from 'react'
import { render } from 'react-dom'
import Photo from './Photo';
class PhotoGrid extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div className='photo-grid'>
      {this.props.posts.map( (post,index) => <Photo { ...this.props}  key={index+post} i={index} post={post} />)}
    </div>
   )
  }
}

module.exports = PhotoGrid
