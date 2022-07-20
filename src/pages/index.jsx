import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Resume from './Resume'
import Course from './Courses'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/resumen" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App