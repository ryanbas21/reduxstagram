

function Posts (state = [], action) {
  switch(action.type){
    case 'INCREMENT':
    const i = action.index;
    console.log('happening');
    return [
      ...state.slice(0,i),
      {...state[i], likes:state[i].likes + 1},
      ...state.slice(i + 1)
   ]
    default: return state
  }
  return state;
}

export default Posts
