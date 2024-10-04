import Playground from './components/Playground'
import ChatbotUI from './components/ChatbotUI'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MotivationBooster from './components/MotivationBooster'
import './App.css'

function App() {

  return (
    <>
    <div className="wrapper-mobile">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/chatbot" element={<ChatbotUI />} />
        <Route path="/motivation" element={<MotivationBooster />} />
      </Routes>
    </div>
    </>
  )
}

export default App
