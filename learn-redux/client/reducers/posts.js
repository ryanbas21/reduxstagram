

function Posts (state = [], action) {
  switch(action.type){
    case 'INCREMENT_LIKES':
    const i = action.index;
    return [
      ...slice.state(0,i),
      {...state[i], likes:state[i].likes + 1},
      state.slice(i + 1)
   ]
    default: return state
  }
  return state;
}

export default Posts
