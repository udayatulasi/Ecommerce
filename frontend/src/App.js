import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


// Import all files
import Header from './components/Header/Header'
import  Home  from './components/Home'
import Footer from './components/Footer'

// pages
import Products from './pages/Products';
import AboutUs    from  './pages/AboutUs';
import Blog      from './pages/Blog';
import ContactUs from  './pages/ContactUs';




function App() {
  return (

      <Router>
              <Header />
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products}/>
              <Route exact path="/aboutus" component={AboutUs}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/contactus" component={ContactUs}/>

        </Switch>
              <Footer />
      </Router>

   
  )
}

export default App;
