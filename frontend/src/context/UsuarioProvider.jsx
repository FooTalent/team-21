import { useEffect, useState } from "react";
import { UsuarioContext } from "./UsuarioContext";
import Cookies from "js-cookie";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
import { useNavigate } from "react-router-dom";

export const UsuarioProvider = ({ children }) => {
  //  const URL_BASE = 'https://hotel-oceano.onrender.com' //SERVIDOR DE JAVIER
  // const URL_BASE = "https://hotel-ey89.onrender.com"; //SERIVIDOR OMAR
  const [csrfToken, setCsrfToken] = useState(null); // Estado para el token CSRF

  const [usuario, setUsuario] = useState({});
  const apiUrl =  import.meta.env.VITE_API_URL

  const axiosInstance = axios.create({
   
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: apiUrl,
    // baseURL: '/api',
    headers: {
      "Content-Type": "application/json",
      "accept": "*/*",
    },
    withCredentials:true,
  });

  const userSave = () => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  };
  // useEffect(() => {
  //   userSave();
  // }, []);

  // Configuración inicial de Axios
  const headers = {
    "Content-Type": "application/json",
    "accept": "*/*",
    
  };

  const login = async (userData) => {
       if (!Cookies.get("sessionid")) {
      try {
        const response = await axiosInstance.post(
          "/api-auth/login-view/",
          {
            username: userData.usuario,
            password: userData.password,
          },
          {
            headers: headers,
            withCredentials: true,
          }
        );
        const token = response.data.csrf_token;
        setCsrfToken(token);
        console.log('mycookie:', Cookies.get('mycookie'));
        console.log(response);
        // const headers = response.headers;
        // console.log(headers);
        // console.log(headers['date']);
        const data = {
          username: userData.usuario,
          password: userData.password,
          csrftoken: csrfToken,
          sessionid: Cookies.get("sessionid"),
        };
        setUsuario(data);
        console.log(data);
        localStorage.setItem("usuario", JSON.stringify(data));
        // window.location.href = '/admin/home';
      } catch (error) {
        alert("Credenciales invalidas pero no aca ");
      }
    }
  };

  const logout = async () => {
    
    // const cookieValue =JSON.parse(localStorage.getItem('usuario'));
    // console.log(cookieValue.csrftoken);

    console.log('token de estado'+csrfToken);
    console.log(Cookies.get('csrftoken'));
   console.log(usuario.csrftoken);
    console.log(document.allCookies);
    console.log('mycookie:', Cookies.get('mycookie'));
    try {
        console.log("Referer:"+apiUrl);
      const response = await axiosInstance.post(
       
        "/api-auth/logout-view/",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            // "X-CSRFToken": usuario.csrftoken,
            // "X-XSRF-TOKEN": usuario.csrftoken,
            // "XSRF-TOKEN": usuario.csrftoken,
            'Referer':apiUrl,

            // "sessionid":"",
          },

          withCredentials: true,
        }
      );
    } catch (error) {
      localStorage.removeItem("usuario");
      console.log("algo paso" + error);
    }
    setUsuario(false);
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        login,
        logout,
        userSave,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
