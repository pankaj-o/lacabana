import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ProtectedAdmin from './components/ProtectedAdmin'
import './index.css'

// Simple routing based on URL path
const Router = () => {
  const path = window.location.pathname;
  
  if (path === '/admin') {
    return <ProtectedAdmin />;
  }
  
  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

