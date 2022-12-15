import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const Navigator = useNavigate();

  return (
    <>
        <div>Contact</div>
        <button onClick={() => Navigator(-1)}>Back</button>
    </>
  )
}

export default Contact