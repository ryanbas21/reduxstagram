import React from 'react'
import Photo from './Photo'
import Comments from './Comments'
const Single = (props) => {
    const { postid } = props.params
    console.log(props);
    const i = props.posts.findIndex( (post) => post.code === postid)
    const post = props.posts[i];
    const postComments = props.comments[postid] || [];
    return (
    <div className='single-photo'>
        <Photo i={i} post={post} {...props} />
        <Comments postComments={postComments} {...props}/>
    </div>
    )
}
export default Single;
