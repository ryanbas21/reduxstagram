import React, { Component } from 'react'

class Comments extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderComment = this.renderComment.bind(this);
  }
renderComment(comment,index){
  return (
    <div className='comment'>
      <p><strong>comment.user</strong>
      {comment.text}
      <button className='remove-comment'>&times;</button>
      </p>
    </div>
  )
}
handleSubmit(e) {
  e.preventDefault()
  const  { postid } = this.props.params
  const author = this.refs.author.value
  const comment = this.refs.comment.value
  console.log('submitting the form');
  console.log(postid, author, comment);

}
render(){
  return (
      <div>
      {this.props.postComments.map(this.renderComment)}
      <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
        <input type='text' ref='author' placeholder='author' />
        <input type='text' ref='comment' placeholder='comment' />
        <input type='submit' hidden />
      </form>
    </div>
  )
}

}
export default Comments
