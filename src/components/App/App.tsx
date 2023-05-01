import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Movies from '../../pages/Movies'
import Navigation from '../../components/Navigation/Navigation'
import Detail from '../../pages/Detail'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
