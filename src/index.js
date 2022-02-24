import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos'

ReactDOM.render(
  <Router>
     <App/>
  </Router>,
  document.getElementById('root')
)