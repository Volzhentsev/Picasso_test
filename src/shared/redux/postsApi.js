import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        getPosts: build.query({
            query: (page) => `posts?_limit10&_page=${page}`
        }),
        getPostById: build.query({
            query: (id) => `posts/${id}`,
          }),
    })
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
