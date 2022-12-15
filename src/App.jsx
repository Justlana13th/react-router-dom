import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import "./App.css"
import Email from './Components/Email'
import Alamat from './Components/Alamat'
import NotFound from './Components/NotFound'
import Post from './Components/Posts/Post'
import DetailPost from './Components/Posts/DetailPost'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
          <Route index element={<Email/>}></Route>
          <Route path='email' element={<Email/>}></Route>
          <Route path='alamat' element={<Alamat/>}></Route>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
        {/* POST */}
        <Route path='post' element={<Post/>}>
          <Route path=':postId' element={<DetailPost/>}></Route>
        </Route>
      </Routes>
      </>
  )
}

export default App