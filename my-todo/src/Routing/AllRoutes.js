import React from 'react'
import Contact from '../Pages/Contact/Contact'
import Task from '../Pages/Task/Task'
import Home from '../Pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
function AllRoutes() {
  return (
    <div>
<Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/task" element={<Task />}></Route>
      </Routes>


    </div>
  )
}

export default AllRoutes