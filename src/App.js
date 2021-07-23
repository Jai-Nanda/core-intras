import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/pages/HeroSection'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Chatbot from './components/pages/Chatbot'
import Shop from './components/pages/Shop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={HeroSection} />
          <Route path='/about' exact component={About} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/chatbot' exact component={Chatbot} />
        </Switch>
        <Footer />
      </Router>
      </>
  )
}

export default App;

