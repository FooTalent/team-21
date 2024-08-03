import React, { useEffect, useState } from 'react'
import {ReservasContext} from './ReservasContext'
import axios from 'axios';
import Cookies from 'js-cookie';

export const ReservasProvider = ({children}) => {
  // const URL_BASE = "https://hotel-oceano.onrender.com";
  // const URL_BASE = 'https://hotel-ey89.onrender.com' //SERIVIDOR OMAR
 
    const [reservas, setReservas] = useState([]);
    const [updateRoom, setUpdateRoom] = useState(false);
    
    

    const obtenerReservas = async () => {
        try {
          //realice un cambio para tomar el listado desde quotation
          // const response = await axios.get(`${URL_BASE}/api-reservation/reservationroom/`);
          
          const response = await axios.get('/api/api-reservation/reservationroom/',
            {
              withCredentials:true,
             
              xsrfCookieName: 'csrftoken',
            }
           );
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
