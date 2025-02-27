import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const myApi = createApi({
    reducerPath:'myApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/"
    }),
    tagTypes:['Posts'],
    endpoints:(builder)=>({
        getPosts:builder.query<Post[],string>({query:()=>"posts",
            providesTags:['Posts']
        }),
        createPosts:builder.mutation<Post,Post>({
            query:(post)=>({
                url:"posts",
                method:"POST",
                body:post,
                
            }),
            invalidatesTags:['Posts']
        })
    })
})


export const {getPosts} = myApi.endpoints // this when using @reduxjs/toolkit/query
export const {useGetPostsQuery,useCreatePostsMutation} = myApi // a simpler syntax when using @reduxjs/toolkit/query/react