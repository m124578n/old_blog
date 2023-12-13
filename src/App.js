import Footer from './components/Footer';
import Board from './components/Board';
import About from './components/About';
import Blog from './components/Blog';
import logo from './android-chrome-192x192.png'
import  { HashRouter, Route, Link, Routes, useLocation  } from 'react-router-dom';
import { useLayoutEffect } from 'react'


const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Wrapper>
        <nav className='nav'>
            <img src={logo} className='picture' alt='logo' />
            <Link to='/' className='word'>Blog</Link>
            <Link to='/about' className='word' >About</Link>
        </nav>
        <Routes>
            <Route index element={<Board/>} />
            <Route path="/about" element={<About />} />
            <Route path="/:id" element={<Blog />} />
        </Routes>
        </Wrapper>
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
