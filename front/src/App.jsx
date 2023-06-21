// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './add/Add'
import Home from './home/Home'
import { Edit } from './edit/Edit'
import View from './view/View'
// import Delete from './delete/Delete'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
        {/* <Route path="/delete" element={<Delete />} /> */}
      </Routes>
    </>
  )
}

export default App
