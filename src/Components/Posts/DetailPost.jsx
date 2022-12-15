import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPost = () => {

    const Params = useParams();

  return (
    <>
        <h1>Judul post {Params.postId}</h1>
        <p>Detail Post {Params.postId}</p>
    </>
  )
}

export default DetailPost