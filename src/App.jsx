import Playground from './components/Playground'
import ChatbotUI from './components/ChatbotUI'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <div className="wrapper-mobile">
      <Routes>
        <Route path="/" element={<Playground />} />
        <Route path="/chatbot" element={<ChatbotUI />} />
      </Routes>
    </div>
      
    </>
  )
}

export default App
