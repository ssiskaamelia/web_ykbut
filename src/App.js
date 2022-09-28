import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import Service from "./components/services/Services"
import Career from "./components/career/Pricing"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import MediaPage from "./components/mediaroom/GalleryPage"
import Whistleblowing from "./components/home/wbs"
import BusinessPage from "./components/business/BusinessPage"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/business' component={BusinessPage} />
          <Route exact path='/services' component={Service} />
          <Route exact path='/career' component={Career} />
          <Route exact path='/media' component={MediaPage} />
          <Route exact path='/whistleblowing' component={Whistleblowing} />
          {/* <Route exact path='/journal' component={Blog} /> */}
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
