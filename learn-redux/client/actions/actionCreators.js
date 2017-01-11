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
  return {
    type: ADD_COMMENT,
    postid,
    author,
    comment
  }
}

function deleteComment(postid,i){
  return {
    type: REMOVE_COMMENT,
    postid,
    i
  }
}

 module.exports = { increment,deleteComment,addComment }
