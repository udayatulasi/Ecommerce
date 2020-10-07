import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


// Import all files
import  Home  from './components/Home'

// pages
import Products from './Common/pages/Products';
import AboutUs    from  './Common/pages/AboutUs';
import Blog      from './Common/pages/Blog';
import ContactUs from  './Common/pages/ContactUs';





function App() {
  return (

      <Router>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products}/>
              <Route exact path="/aboutus" component={AboutUs}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/contactus" component={ContactUs}/>

        </Switch>
      </Router>

   
  )
}

export default App;
