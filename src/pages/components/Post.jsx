import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../shared/redux';

function Post() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useGetPostByIdQuery(id);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            {data &&
                 <>
                    <span>№ {id}</span>
                    <h3>{data.title}</h3>
                    <div>{data.body}</div> 
                    <button onClick={() => navigate(-1)}>
                    Назад
                    </button> 
                </>
            }
        </div>
    );
}

export default Post;
