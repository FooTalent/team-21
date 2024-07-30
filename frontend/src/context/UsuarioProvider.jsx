import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"
import axios from "axios";


export const UsuarioProvider = ({children}) => {
   const URL_BASE = 'https://hotel-oceano.onrender.com'

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  // Configuración inicial de Axios
const axiosInstance = axios.create({
  baseURL: URL_BASE+"/api-auth/login-view/", 
  withCredentials: true, // Permite enviar y recibir cookies
});



  const login =async (userData) => {
    const response =await axiosInstance.post(URL_BASE,{username:userData.usuario,password:userData.password},{withCredentials:true});
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
