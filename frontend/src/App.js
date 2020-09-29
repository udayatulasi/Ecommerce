import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


// Import all files
import Header from './components/Header'
import  Home  from './components/Home'
import Footer from './components/Footer'


function App() {
  return (

      <Router>
              <Header />
        <Switch>
              <Route path='/' component={Home} />
        </Switch>
              <Footer />
      </Router>

   
  )
}

export default App;
