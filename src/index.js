//codigo de react trabajado en el curso de youtube

//importaciones de codigo de fuentes del proyecto

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

//llamando el contenedor donde se imprimira
const container = document.getElementById('root')


//usando el react-dom para poder renderizar y poder imprimir los datos en el codigo de html
ReactDOM.render(<App />, container)