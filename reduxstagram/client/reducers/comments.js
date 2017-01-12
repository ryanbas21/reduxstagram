function postComments (state=[], action){
  switch(action.type){
    case 'ADD_COMMENT' :
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT' :
    console.log(action,'hey')
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i + 1)
      ]
    default: return state;
  }
}

function comments (state = [], action) {
  if (typeof action.postid !== undefined) return {
    ...state,
    [action.postid] : postComments(state[action.postid], action)
  }
  return state;
}

export default comments
