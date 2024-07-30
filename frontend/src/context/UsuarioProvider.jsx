import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"
import axios from "axios";


export const UsuarioProvider = ({children}) => {
   const url = 'https://hotel-oceano.onrender.com/api-auth/login-view/'

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  // Configuración inicial de Axios
const axiosInstance = axios.create({
  baseURL: url, // Cambia esto a la URL de tu API
  withCredentials: true, // Permite enviar y recibir cookies
});



  const login =async (userData) => {
    const response =await axiosInstance.post(url,{username:userData.usuario,password:userData.password},{withCredentials:true});
    console.log(response['set-cookie']);
    // const res = await axiosInstance.post("https://hotel-oceano.onrender.com/api-room/roomphoto/")
    console.log(response.data);
    // const miCookie = getCookie('csrftoken');
    // console.log(miCookie);
    
    
    // setUsuario(userData);
    // localStorage.setItem('usuario', JSON.stringify(userData));
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };


    return (
    <UsuarioContext.Provider value={{usuario,login, logout}}>
        {children}
    </UsuarioContext.Provider>
  )
}
