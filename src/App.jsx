import { useState } from 'react'

import './App.css'

// librerias
import { BrowserRouter, Routes, Route } from "react-router-dom";

// vistas
import Home from './views/Home';
import Usuario from './views/Usuario';

// componentes
import Navbar from './components/Navbar';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuario/:id" element={<Usuario/>} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

/*
- Considerando la siguiente API “https://dummyjson.com/users”.
- Crea una vista que sirva para mostrar a un usuario cualquiera. Este componente debe aceptar props para completar los campos necesarios, tales como el nombre, género, ciudad, foto, etc.
- Esta vista debe recibir por parámetro el id del usuario y por medio de la api buscar su información y mostrarla en pantalla.

- Crea una vista home que muestre en un select los primeros 10 usuarios. Con un botón de búsqueda derive a la vista del usuario.

- Crea un componente navbar que muestre el enlace entre home y usuario. La vista activa deberá tener un estilo diferente.

*/
