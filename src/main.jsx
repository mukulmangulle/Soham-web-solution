import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./Css/index.css"
import "./Css/Homepage/Navbar.css"
import "./Css/Homepage/Home.css"
import "./Css/AboutSection.css"
import "./Css/Contact.css"
import "./Css/Blogpage.css"
import "./Css/Career.css"
import "./Css/Service.css"
import "./Css/Homepage/Footer.css"
import { Provider } from 'react-redux'
import store from './features/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
