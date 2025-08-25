import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Homepage from './Pages/Homepage.tsx'
import Gamepage from './Pages/Gamepage.tsx'
import AppContextProvider from './Context/AppContextProvider.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Homepage />}/>
      <Route path='/gamepage' element={<Gamepage />}/>
    </Route>
));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
   <RouterProvider router={router}/>
    </AppContextProvider>
  </StrictMode>,
)
