import React from 'react';
import { Link } from 'react-router'
const Photo = (props) =>
        <figure className='grid-figure'>
          <div className='grid-photo-wrap'>
           <Link to={`/view/${props.post.code}`}>
            {props.post.caption}
          </Link>
         </div>
        </figure>

export default Photo;
