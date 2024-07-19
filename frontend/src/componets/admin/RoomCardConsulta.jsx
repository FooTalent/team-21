import {
  Box,
  Image,
  Text,
  Input,
  Button,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { formatDate } from "../../assets/formatDate.js";
import { useContext, useEffect, useState } from "react";
import { RoomCardConfirmModal } from "./RoomCardConfirmModal.jsx";
import { HabitacionContext } from "../../context/HabitacionContext.jsx";
import axios from "axios";
// import { ReservasContext } from "../../context/ReservasContext.jsx";

export const RoomCardConsulta = ({
  // id,
  // client,
  // company,
  // start_date,
  // end_date,
  // people,
  // status,
  // room_types,
  consulta,
}) => {
  const BASE_URL = "https://hotel-oceano.onrender.com";
  const [roomNumber, setRoomNumber] = useState("");
  const [roomTipo, setRoomTypes] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDeleting, setIsDeleting] = useState(false);
  const { setUpdateRoom, updateRoom} = useContext(HabitacionContext); //tomado de Habitaciones
  // const { setUpdateRoom, updateRoom} = useContext(ReservasContext);

  const getRoomType= async(id)=>{
    try{
      const res = await fetch(`${BASE_URL}/api-room/roomtype/${id}/`);
      const room = await res.json();
      return room
      
    }catch(error){
      console.log("error al obtner datos del roomtype");
    }
  }

  useEffect(() => {
    const fetchRoomTypes = async () => {
      const types = {};
      for (const r of consulta.room_types) {
        if (!types[r.room_type_id]) {
          types[r.room_type_id] = await getRoomType(r.room_type_id);
        }
      }
      setRoomTypes(types);
    };

    fetchRoomTypes();
  }, [consulta.room_types]);

  
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  
  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };
  const [data,setData]=useState({})
  const cliente = consulta.client.is_company? consulta.client.company.name : consulta.client.individual.first_name;
  
  const transformData = () => {
    
    return {
      client: {
       
        is_company: data.client.is_company,
        email: data.client.email,
        phone: data.client.phone,
        zip_code: data.client.zip_code,
        individual: {
          first_name: data.client.is_company?'s':data.client.individual.first_name, // Asignar valores adecuados
          last_name:  data.client.is_company? 's':data.client.individual.last_name   // Asignar valores adecuados
        },
        company: {
          name:  data.client.is_company?  data.client.company.name:'s',
          manager:  data.client.is_company?  data.client.company.manager : 's' ,
          address:  data.client.is_company?  data.client.company.name : 's'
        }
      },
      start_date: data.start_date,
      end_date: data.end_date,
      people: data.people,
      payment_method: data.payment_method,
      status: 'D', 
      room_types: data.room_types.map(rt => ({
        room_type_id: rt.room_type_id,
        quantity: rt.quantity
      })),
      services: data.services.map(s => ({
        service_id: s.service_id,
        quantity: s.quantity
      }))
    };
  };

  const onDelete = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/api-quotation/quotation/${id}/`);
      // const cli = axios.get(`${BASE_URL}/api-client/client/${response.data.client.id}/`)
      // console.log(cli.data);
      console.log(response.data.client.id);
      setData(response.data)
      const updateData=transformData()
      // console.log(updateData);
      if(updateData){
        
        console.log(JSON.stringify(updateData));
        await axios.put(
          `${BASE_URL}/api-quotation/quotation/${id}/`, updateData)
          .then(response=>{
              console.log("Datos actaulizados correctamente");
          })
          .catch(error=>{
            console.log("Error al actualizar");
          })
          
        }
      
      setUpdateRoom(true);
      // setHabitaciones(habitaciones.filter(hab => hab.id !== id));
    } catch (error) {
      console.error("Error al eliminar la consulta:", error);
    }
  };

  const handleDelete = async () => {
    
    setIsDeleting(true);
    try {
      await onDelete(consulta.id);
      onClose();
    } catch (error) {
      console.error("Error al eliminar la consulta:", error);
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <Box
      flexDirection="column"
      alignItems="center"
      padding="16px"
      gap="10px"
      width="100%"
      height="auto"
      background="#FFFFFF"
      boxShadow="0px 6px 58px rgba(196, 203, 214, 0.103611)"
      borderRadius="24px"
      marginBottom="20px"
    >
      <Box display="flex" alignItems="center">
        {/* Imagen de la habitación */}
        <Image src="/icons/room.png" alt="room" width="48px" height="48px" />

        {/* Contenedor para los títulos y los textos */}
        <Box m={1}>
          <Box display="flex">
            {/* Título tipo de habitación */}

            <Box mr="4">
              <Text fontSize="12px" fontWeight="bold" color="text.gris">
                Reserva:
              </Text>

              <Text fontSize="14px" color="text.verydark">
                {consulta.room_types.map((r) => (
                
                  <Box key={r.id}>
                    
                    <Text>Tipo:  {roomTipo[r.room_type_id]?.type || 'Cargando...'}</Text>
                    <Text>Cant: {r.quantity}</Text>
                  </Box>
                ))}
              </Text>
            </Box>
            <Box m={2}>
              {/* Nombre del cliente */}
              <Text fontSize="14px" color="text.verydark">Cliente: </Text>
                <Text>{cliente}</Text>
              {/* {consulta.client.is_company
               ? <Text>{consulta.client.company.name} </Text>
               : <Text>{consulta.client.individual.first_name} </Text>
                             
              }  */}
                {/* {roomType[0].room_type_id} */}
              
            </Box>

            <Box>
              <Text fontSize="12px" color="text.gris" fontWeight="bold">
                Cod Reserva
              </Text>
              <Text fontSize="14px" color="text.verydark">
                {consulta.id.slice(-6)}
              </Text>
            </Box>
          </Box>
          <Box fontSize="14px" color="text.verydark" m={2}>
            <Text>Ingreso: {consulta.start_date}</Text>
            <Text>Egreso: {consulta.end_date}</Text>
          </Box>
        </Box>
      </Box>

      {/* Grid para N° Habitación, Confirmado y Status */}

      <Flex gap="10px" marginTop="16px" justify={"space-around"}>
        <Flex flexDirection={"column"}>
          <Text fontSize="12px" fontWeight="bold" color="text.gris">
            N° Personas
          </Text>
          <Text fontSize="14px" color="text.verydark">
            {consulta.people}
          </Text>
        </Flex>

        <Flex flexDirection={"column"}>
          <Button varian="filled" m={2} onClick={openConfirmModal}>
            Reservar
          </Button>
          <Button varian="filled" m={2}  onClick={onOpen}>
            Cancelar
          </Button>
        </Flex>
      </Flex>

      <Box>
        <Text fontSize="14px" fontWeight="bold" color="#20102B">
          {" "}
          Observaciones{" "}
        </Text>

        <Input
          placeholder="Escribe tus observaciones aquí"
          marginTop="8px"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0px",
            gap: "12px",
            width: "100%",
            height: "44px",
            boxShadow: "0px 1px 2px 0px #4D40551A",
            borderRadius: "4px",
            flex: "none",
            order: "0",
            flexGrow: "1",
            border: "1px solid #4D40551A",
          }}
        />
      </Box>
      <RoomCardConfirmModal 
      isOpen={isConfirmModalOpen} 
      onClose={closeConfirmModal} 
      estado={status} 
      date_in={consulta.start_date}
      date_out={consulta.end_date}
      client = {cliente}
      client_id={consulta.client.id}
      codRes = {consulta.id}
      />
       {/* Modal de confirmación para eliminar una consulta */}
       <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirmar eliminación</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                ¿Estás seguro de que quieres eliminar la consulta?
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  colorScheme="red"
                  onClick={handleDelete}
                  isLoading={isDeleting}
                >
                  Eliminar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
    </Box>
    
  );
};
