import React, { useEffect, useState } from 'react'
import {ReservasContext} from './ReservasContext'
import axios from 'axios';
import Cookies from 'js-cookie';

export const ReservasProvider = ({children}) => {
  // const URL_BASE = "https://hotel-oceano.onrender.com";
  const URL_BASE = 'https://hotel-ey89.onrender.com' //SERIVIDOR OMAR
  axios.defaults.baseURL= "https://hotel-ey89.onrender.com";
  axios.defaults.withCredentials = true; 
    const [reservas, setReservas] = useState([]);
    const [updateRoom, setUpdateRoom] = useState(false);
    
    

    const obtenerReservas = async () => {
        try {
          //realice un cambio para tomar el listado desde quotation
          // const response = await axios.get(`${URL_BASE}/api-reservation/reservationroom/`);
          const csrfToken = Cookies.get('csrftoken');
          console.log(csrfToken);
          const response = await axios.get('/api-reservation/reservationroom/' );
          setReservas(response.data);
        } catch (error) {
          console.log("No se llevo a cabo la consultas");
          // setError(error.message);
          // setCargando(false);
        }
      };
      useEffect(()=>{
        obtenerReservas();
       
      },[updateRoom])
    return (
       <ReservasContext.Provider value={{reservas,obtenerReservas,updateRoom,setUpdateRoom}}>
        {children}
       </ReservasContext.Provider>
    )
}
