import { useEffect, useState } from "react";
import { UsuarioContext } from "./UsuarioContext";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UsuarioProvider = ({ children }) => {

  //  const URL_BASE = 'https://hotel-oceano.onrender.com' //SERVIDOR DE JAVIER
  // const URL_BASE = "https://hotel-ey89.onrender.com"; //SERIVIDOR OMAR
  const [csrfToken, setCsrfToken] = useState(null); // Estado para el token CSRF

  const [usuario, setUsuario] = useState({});
  

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    withCredentials: true,
  });

  const userSave = () => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  };
  useEffect(() => {
    userSave();
  }, []);

  // Configuración inicial de Axios
  const headers = {
    "Content-Type": "application/json",
    accept: "*/*",
  };

  const login = async (userData) => {
     
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
      response.data.csrf_token !== null &&
        setCsrfToken(response.data.csrf_token);
      const data = {
        username: userData.usuario,
        password: userData.password,
        csrftoken: csrfToken,
      };
      setUsuario(data);

      localStorage.setItem("usuario", JSON.stringify(data));
      return true;
    } catch (error) {
      setUsuario({});
      localStorage.removeItem("usuario");
      if (error.response) {
        alert("autentication");
      } else {
        alert(error);
      }

      return false;
    }
  };

  const logout = async () => {
   console.log(Cookies.get('csrftoken'));
    try {
     
      const response = await axiosInstance.post(
        "/api-auth/logout-view/",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": usuario.csrftoken,
            // "X-XSRF-TOKEN": usuario.csrftoken,
            // "XSRF-TOKEN": usuario.csrftoken,

            // "sessionid":"",
          },

          withCredentials: true,
        }
      );
      localStorage.removeItem("usuario");
      Cookies.remove('csrftoken');
      Cookies.remove('sessionid');
      setUsuario({});
      window.location.href = "/login";
    } catch (error) {
      console.log("algo paso" + error);
      localStorage.removeItem("usuario");
      Cookies.remove('csrftoken');
      Cookies.remove('sessionid');
      setUsuario({});
      window.location.href = "/login";
    }
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
