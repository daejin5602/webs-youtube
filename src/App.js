import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'



const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/today' element = {<Today/>} />
            <Route path='/developer' element = {<Developer/>} />
            <Route path='/webd' element = {<Webd/>} />
            <Route path='/website' element = {<Website/>} />
            <Route path='/gsap' element = {<Gsap/>} />
            <Route path='/port' element = {<Port/>} />
            <Route path='/youtube' element = {<Youtube/>} />
            <Route path='/channel/:channelID' element = {<Channel/>} />
            <Route path='/video/:videoID' element = {<Video/>} />
            <Route path='/search/:searchID' element = {<Search/>} />
            <Route path='/*' element = {<Not/>} />
        </Routes>
      </BrowserRouter>
    )
}

export default App