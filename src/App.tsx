import React, { useEffect, useState } from 'react'

import Navigation from './Navigation'

import './styles/global.css'
import Content from './Content'

const App = () => {
  useEffect(() => {
  window.addEventListener('scroll', () => {
    const elem = document.getElementById('profile-photo-id')
    const elemRect = elem?.getBoundingClientRect()
    const elementY = elemRect?.y as number
    const scrollY = window.scrollY
    if(scrollY > elementY) {
      document.getElementById('navigation-bar')?.setAttribute('class', 'fixed-nav-container')
    } else {
      document.getElementById('navigation-bar')?.setAttribute('class', 'nav-container')
    }
  })
  }, [])

  return (
    <div className="main-container">
     <Content />
    </div>
  )
}

export default App;
