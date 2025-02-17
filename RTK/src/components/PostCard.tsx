import React from 'react'

const PostCard = ({post}:{post:Post}) => {
  return (
    <div>
        <h2>titile:{post.title}</h2>
        <h3>{post.body}</h3>
        <h6>user:{post.userid}</h6>
        
    </div>
  )
}

export default PostCard