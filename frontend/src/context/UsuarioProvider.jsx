import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"
import Cookies from 'js-cookie';
import axios from "axios";



export const UsuarioProvider = ({children}) => {
  //  const URL_BASE = 'https://hotel-oceano.onrender.com' //SERVIDOR DE JAVIER
  const URL_BASE = 'https://hotel-ey89.onrender.com' //SERIVIDOR OMAR
  axios.defaults.baseURL= "https://hotel-ey89.onrender.com";
  axios.defaults.withCredentials = true; 
  
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


  const login =async (userData) => {
    try{
      const response =await axios.post(`${URL_BASE}/api-auth/login-view/`,
      {
        username:userData.usuario,
        password:userData.password
      },
      {
        headers:headers,
        withCredentials: true
      }
    );
    const csrfToken = Cookies.get('crsftoken');
    console.log(csrfToken);
    setUsuario(true);
    localStorage.setItem('usuario', JSON.stringify(userData));
   
  }catch(error){
   alert('Credenciales invalidas')
  }
  };

  const logout = async() => {
    try{
      const response =await axios.post(`${URL_BASE}/api-auth/logout-view/`,
      {
        headers:{
          // 'Content-Type': 'application/json',
          "accept": "*/*",
          "X-CSRF-TOKEN":"R7toMMfr5eFe734TE1nJSKnIDebck9i9"
        },
        withCredentials: true
      }
    );
    setUsuario(false);
    console.log('Sali');
    localStorage.removeItem('usuario');

    }catch(error){
      console.log(error);
      }
  };


    return (
    <UsuarioContext.Provider value={{usuario,login, logout}}>
        {children}
    </UsuarioContext.Provider>
  )
}
