import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Router from './router' 
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'


function App (){

  return(
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
     )
}        
export default App