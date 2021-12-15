import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.js';
import Home from './component/Home.js'
import Play from './component/Play.js'

const App = () => (
    <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Play" element={<Play/>} />
          </Routes>
    </div>
  )

export default App;
