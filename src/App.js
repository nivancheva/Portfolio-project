import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import ITTraning from './components/ITTraining';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// const router =
//   createBrowserRouter(createRoutesFromElements(
//     <Route path="/" element={ <Root /> }>

//     </Route>
//   ))

function App() {
  return (
    <>
      <AboutMe />
      <Contact />
      <ITTraning />
    </>
  );
}

export default App;
