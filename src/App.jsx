import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Resume from './pages/Resume'

import ProjectsLayout from './layout/ProjectsLayout'
import Projects from './pages/Projects'
import ProjectEon from './pages/ProjectEon'
import Ivorfall from './pages/Ivorfall'
import Goom from './pages/Goom'

const App = () => {

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index path="" element={<Home/>}/>
        <Route path="resume" element={<Resume/>}/>

        <Route path="projects" element={<ProjectsLayout/>}>
          <Route index element={<Projects/>}/>
          <Route path="projecteon" element={<ProjectEon/>}/>
          <Route path="ivorfall" element={<Ivorfall/>}/>
          <Route path="goom" element={<Goom/>}/>
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