import React from 'react';
import ReactDOM from 'react-dom/client';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Actualizable} from './components/Aplicacion/App/App.jsx';
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Actualizable />
  </React.StrictMode>
)
