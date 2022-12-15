import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Post = () => {
  return (
    <div>
        <Link to={'1'}>Post 1</Link>
        <Link to={'2'}>Post 2</Link>
        <Link to={'3'}>Post 3</Link>
        <Outlet/>
    </div>
  )
}

export default Post