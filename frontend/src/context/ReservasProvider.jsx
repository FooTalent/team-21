import React, { useEffect, useState } from 'react'
import {ReservasContext} from './ReservasContext'
import axios from 'axios';

export const ReservasProvider = ({children}) => {
    const URL_BASE = "https://hotel-oceano.onrender.com";
    const [reservas, setReservas] = useState([]);
    const [updateRoom, setUpdateRoom] = useState(false);
    
    const obtenerReservas = async () => {
        try {
          //realice un cambio para tomar el listado desde quotation
          //const response = await axios.get(URL_BASE+'/api-reservation/reservationroom/');
          const response = await axios.get(
            URL_BASE + "/api-reservation/reservationroom/"
          );
          setReservas(response.data);
        } catch (error) {
          setError(error.message);
          setCargando(false);
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
