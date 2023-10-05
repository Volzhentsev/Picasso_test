import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({post}) {
    return (
        <div>
            <span>№ {post.id}</span>
            <h3>{post.title}</h3>
            <p>{post.body.length>33?post.body.substring(0,33)+'...':post.body}</p>
            <Link to={`/${post.id}`}><button>Просмотр</button></Link>
        </div>
    );
}

export default PostItem;
