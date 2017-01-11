import React from 'react';
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'
const Photo = (props) => {
        console.log(props)
        const { post, i, comments } = props
        return (
        <figure className='grid-figure'>
          <div className='grid-photo-wrap'>
           <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className='grid-photo'/>
          </Link>
          <CSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                  <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>
         </div>
         <figcaption>
                 <p>{post.caption}</p>
                 <div className='control-buttons'>
                  <button onClick={() => props.increment(props.i)} className='likes'>&hearts; {post.likes}</button>
                  <Link className='button' to={`/view/${post.code}`}>
                   <span className='comment-count'>
                        <span className='speech-buble'>
                        {comments[post.code] ? comments[post.code].length : 0}
                        </span>
                   </span>
                  </Link>
                 </div>
         </figcaption>
 </figure>
 )}
export default Photo;
