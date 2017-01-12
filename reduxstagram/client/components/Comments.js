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
      <p><strong>{comment.user}</strong>
      {comment.text}
      <button className='remove-comment' onClick={() => this.props.removeComment(this.props.params.postId, index)}>&times;</button>
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
  this.props.addComment(postid,author,comment)
  this.refs.commentForm.reset();
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
