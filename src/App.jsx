import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Resume from './pages/Resume'

import ProjectsLayout from './layout/ProjectsLayout'
import Projects from './pages/Projects'
import Project from './components/Project/Project'

const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index path="" element={<Home/>}/>
        <Route path="resume" element={<Resume/>}/>

        <Route path="projects" element={<ProjectsLayout/>}>
          <Route index element={<Projects/>}/>
          <Route path=":project" element={<Project/>} errorElement={<Home/>}/>
        </Route>

        <Route path="*" element={<Home/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={Router}/>
  )
}

export default App