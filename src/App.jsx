import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import ArticlePage from './components/Article/ArticlePage.jsx'
import BlogPage from './components/BlogPage/BlogPage.jsx'
import AboutPage from './components/About/AboutPage.jsx'
import ScrollToTop from './ScrollToTop.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App