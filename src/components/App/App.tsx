import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Movies from '../../pages/Movies'
import Navigation from '../../components/Navigation/Navigation'
import Detail from '../../pages/Detail'
import Login from '../../pages/Login'
import Favorite from '../../pages/Favorite'
import Register from '../../pages/Register'
import Mypage from '../../pages/Mypage'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
