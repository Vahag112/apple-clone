
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import MainPage from './pages/MainPage'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path='/' element ={<MainPage />} />
      </Routes>
      </main>
      <Footer />

    </>
  )
}

export default App
