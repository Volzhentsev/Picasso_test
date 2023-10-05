import React, { useEffect, useState, useRef} from 'react';
import { useGetPostsQuery } from '../../shared/redux'
import PostItem from './PostItem';

function PostsList() {
    const [page, setPage] = useState(1);
    const {data = [], isLoading} = useGetPostsQuery(page);

    const [allPosts, setAllPosts] = useState([]);
    const lastChild = useRef(null);
    const totalPage = page < 10;

    const observer = useRef();

    useEffect(() => {
        
        if (observer.current) observer.current.disconnect();
    
        const pageObserver = (entries) => { 
            if (entries[0].isIntersecting && totalPage) {
                setPage(prev => prev + 1)
            }
        }
        observer.current = new IntersectionObserver(pageObserver)
        if((lastChild.current)) observer.current.observe(lastChild.current)
    
    }, [isLoading]);
    
    useEffect(() => {
        if (data) {
            setAllPosts((prevPosts) => [...prevPosts, ...data]);
        }
    }, [data]);
 
    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <ul>
                {allPosts.map(post =>
                <li key={post.id}>{<PostItem post={post}/>}</li>)}
            </ul>
            <div ref={lastChild} style={{height: '5px'}}></div>
        </div>
    );
}

export default PostsList;
