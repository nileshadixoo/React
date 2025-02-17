import React, { FormEvent, useState } from 'react'
import { useCreatePostsMutation, useGetPostsQuery } from './redux/api'
import PostCard from './components/PostCard';

const App = () => {
  const {isLoading,isError,isFetching,isSuccess,data} = useGetPostsQuery("")
  const [createPosts] = useCreatePostsMutation()
  console.log( isLoading,isError,isFetching,isSuccess,data);
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')


  const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const post:Post = {
        'title':title,
        'body':body,
        'userid':Math.random()*100,
        'id':Math.random()*1000
      }
      createPosts(post)
      setTitle('')
      setBody('')

  }
  
  return (
    <div>

      <form onSubmit={submitHandler} >
    <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <input type="text" placeholder='body' value={body} onChange={(e)=>setBody(e.target.value)}/>
    <button type='submit'>post</button>

      </form>
      {
          data?.map((i)=>(
            <PostCard key={i.id} post={i}/>
          ))
      }
    </div>
  )
}

export default App