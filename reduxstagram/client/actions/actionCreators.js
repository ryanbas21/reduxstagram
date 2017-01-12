const INCREMENT = 'INCREMENT',
 ADD_COMMENT = 'ADD_COMMENT',
 REMOVE_COMMENT = 'REMOVE_COMMENT';

function increment(index){
  return {
    type: INCREMENT,
    index
  }
}
function addComment(postid,author,comment) {
  console.log('dispatching add comment');
  return {
    type: ADD_COMMENT,
    postid,
    author,
    comment
  }
}

function removeComment(postid,i){
  console.log('removing a comment');
  return {
    type: REMOVE_COMMENT,
    postid,
    i
  }
}

 module.exports = { increment, removeComment, addComment }
