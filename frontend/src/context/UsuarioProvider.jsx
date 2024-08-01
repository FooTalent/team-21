import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"
import Cookies from 'js-cookie';
import axios from "axios";


export const UsuarioProvider = ({children}) => {
   const URL_BASE = 'https://hotel-oceano.onrender.com' //SERVIDOR DE JAVIER
  //  const URL_BASE = 'https://hotel-oceano-2sue.onrender.com' //SERIVIDOR OMAR

  const [usuario, setUsuario] = useState(false);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  // Configuración inicial de Axios
const headers={
  'Content-Type': 'application/json',
  'accept': '*/*',
}


const cookie=()=> {
  const value = Cookies.get('csrftokens');
  console.log(value);
}


  const login =async (userData) => {
    try{
      const response =await axios.post(URL_BASE+'/api-auth/login-view/',
      {
        username:userData.usuario,
        password:userData.password
      },
      {
        headers:headers,
        withCredentials: true
      }
    );
    setUsuario(true);
    // localStorage.setItem('usuario', JSON.stringify(userData));
    console.log(cookie());
  }catch(error){
   alert('Credenciales invalidas')
  }
  };

  const logout = async() => {
    try{
      const response =await axios.post(URL_BASE+'/api-auth/logout-view/',
      {
        headers:{
          'Content-Type': 'application/json',
          'accept': '*/*',
          'x-csrftoken':'DM3R9wbYwPJ195f8JWdb2wgyVY5IhmBh'
        },
        withCredentials: true
      }
    );
    setUsuario(false);
    localStorage.removeItem('usuario');
    }catch(error){
      console.log(error);
      }
  };


    return (
    <UsuarioContext.Provider value={{usuario,login, logout,cookie}}>
        {children}
    </UsuarioContext.Provider>
  )
}
