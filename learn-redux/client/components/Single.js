import React from 'react'
import Photo from './Photo'
import Comments from './Comments'
const Single = (props) => {
    const i = props.post.findIndex( (post) => post.code === props.params.postid)
    const post = props.post[i];
    return (
    <div className='single-photo'>
        <Photo i={i} post={post} {...props} />
    </div>
    )
}
export default Single;
