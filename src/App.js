import './App.css';
import React from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import ITTraning from './components/ITTraining';
import Root from './components/Root';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router =
   createBrowserRouter(createRoutesFromElements(
     <Route path="/" element={ <Root /> }>
        <Route path="/" element={ <AboutMe /> } />
        <Route path="it-traning" element={ <ITTraning /> } />
        <Route path="contact" element={ <Contact /> } />
     </Route>
  ), { basename: "/portfolio-project" })

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
