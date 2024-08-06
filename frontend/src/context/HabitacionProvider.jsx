import { useEffect, useState } from "react";
import { HabitacionContext } from "./HabitacionContext";
import axios from "axios";
import Cookies from "js-cookie";

export const HabitacionProvider = ({ children }) => {
  // const URL_BASE = "https://hotel-oceano.onrender.com";
   const URL_BASE = 'https://hotel-ey89.onrender.com' //SERIVIDOR OMAR

  axios.defaults.withCredentials = true;
  const [rooms, setRooms] = useState([]);
  const [imgRooms, setImgRooms] = useState([]);
  const [updateRoom, setUpdateRoom] = useState(false);
  const [reservas, setReservas] = useState([]);
  const [consultas, setConsultas] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [usuario, setUsuario] = useState({});

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    withCredentials: true,
  });

  const obtenerDatos = async () => {
    try {
      const respuesta = await axiosInstance.get("/api-room/roomtype/", {
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
          // 'X-CSRFToken':'swn3VTlqZEQ6pz0JeNYMKRTs2h4rv15F'
        },
        withCredentials: true,
      });
      const imagen = await axiosInstance.get("/api-room/roomphoto/", {
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        withCredentials: true,
      });
      setImgRooms(imagen.data);
      setRooms(respuesta.data);
      setCargando(false);
    } catch (error) {
      setError(error.message);
      setCargando(false);
    }
  };

  const obtenerConsultas = async () => {
    try {
      //realice un cambio para tomar el listado desde quotation
      //const response = await axios.get(URL_BASE+'/api-reservation/reservationroom/');
      const cookieValue = Cookies.get("csrftoken", { path: "/" });
      const response = await axiosInstance.get("/api-quotation/quotation/", {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": cookieValue,
        },
        withCredentials: true,
      });
      setConsultas(response.data);
    } catch (error) {
      setError(error.message);
      setCargando(false);
    }
  };

  const userSave = () => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  };

  useEffect(() => {
    userSave();
    obtenerDatos();
    obtenerConsultas();
  }, [updateRoom]);

  //funcion para borrar habitacion
  const onDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api-room/roomtype/${id}/`);
      setUpdateRoom(true);
      // setHabitaciones(habitaciones.filter(hab => hab.id !== id));
    } catch (error) {
      console.error("Error al eliminar la habitación:", error);
    }
  };
  //funcion para guardar habitacion
  const addRoom = async (datosAEnviar, formData) => {
    try {
      const datosAEnviar = {
        ...formData,
        capacity: Number(formData.capacity),
        surface: Number(formData.surface),
        // price: Number(formData.price),
      };
      delete datosAEnviar.id;
      console.log(usuario.csrftoken);
      const response = await axiosInstance.post(
        "https://hotel-ey89.onrender.com/api-room/roomtype/",
        datosAEnviar,
        {
          headers: {
            "X-CSRFToken": usuario.csrftoken,
          },
        }
      );
    } catch (error) {
      console.error("Error al guardar la habitación:", error);
    }
  };

  return (
    <HabitacionContext.Provider
      value={{
        rooms,
        imgRooms,
        obtenerDatos,
        reservas,
        consultas,
        setUpdateRoom,
        updateRoom,
        onDelete,
        addRoom,
      }}
    >
      {children}
    </HabitacionContext.Provider>
  );
};
