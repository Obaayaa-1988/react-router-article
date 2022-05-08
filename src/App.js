
import './App.css';
import Navbar from './pages/navbar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Articles from './pages/articles';
import Forms from './pages/forms';
import Article from './pages/article';



function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
      
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/articles' element={<Articles/>}/>   
        <Route path="/articles/:articleId" element= { <Article />}/>
        <Route path='/forms' element={<Forms />}/>
      </Routes>
     
      </Router>
     
      
     
    </div>
  );
}

export default App;
