import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const Navigator = useNavigate();

  return (
    <>
        <div>Home</div>
        <button onClick={() => Navigator('contact')}>To Contact</button>
    </>
  )
}

export default Home