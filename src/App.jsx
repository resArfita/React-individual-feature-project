import Playground from './components/Playground'
import ChatbotUI from './components/ChatbotUI'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MotivationBooster from './components/MotivationBooster'
import Regist from './components/accounts/Regist'
import Login from './components/accounts/Login'
import './App.css'
import ProtectedRoute from './components/ProdectedRoute'

function App() {


  return (
    <>
    <div className="wrapper-mobile">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/playground" element={<ProtectedRoute><Playground /></ProtectedRoute>} />
        <Route path="/chatbot" element={<ProtectedRoute><ChatbotUI /></ProtectedRoute>} />
        <Route path="/motivation" element={<ProtectedRoute><MotivationBooster /></ProtectedRoute>} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </>
  )
}

export default App
