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
      {this.props.posts.map( (posts,index) => <Photo />)}
    </div>
   )
  }
}

export default PhotoGrid
