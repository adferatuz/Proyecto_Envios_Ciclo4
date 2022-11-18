import React from 'react';
import ReactDOM from 'react-dom/client';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Actualizable} from './components/Aplicacion/App/App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Actualizable />
  </React.StrictMode>
)
