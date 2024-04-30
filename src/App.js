//import { useEffect,useState } from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
//import Melike from './components/melike.jsx'
//import Deneme from './components/Deneme.jsx';
import Home from './pages/home.jsx'
import Detail from './pages/detail.jsx';


function App() {
  return(
  <>
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </Suspense> 
  </Router>

  </>
  )
}
export default App;



