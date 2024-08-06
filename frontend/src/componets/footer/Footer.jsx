import {
  Box,
 
  HStack,
  Text,
  Icon,
  Img,
  useColorMode,
  Center,
  Divider,
  useBreakpointValue,
  Flex,
  useBreakpoint,
} from "@chakra-ui/react";

import { BsGeoAlt,  BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
 const isMobil = useBreakpoint({base:true,sm:false});
  const imgUrl = useBreakpointValue({base:"/img/logo2linea.svg", md: "/img/logo1linea.svg"})

  return (
    <>
      <Center w="100%" bg="primary.500" pt={"15px"}>
        <Img src={imgUrl} width={"250px"} />
      </Center>
      <Box
        bg="brand.light" 
        color="secondary.500"
        py={8}
        px={4}
        flexDir={["column", "row"]}
      >
        <Flex
        flexDir={["column", "row"]} 
        justifyContent={"space-around"}
        borderBottom={'2px solid'}
        borderColor={'secondary.400'} 
        >
          <Link to={"/nosotros"}
        
          >Sobre nosotros</Link>
          {/* <Link to={"/room"}>Habitaciones</Link> */}
          {/* <Link>Nuestros servicios</Link> */}
          <Link to={"/interes"}>Sitios de Interes</Link>
          <Link to={"/consulta"}>Formulario de Consulta</Link>
        </Flex>
        {/* <Divider/> */}
        <Flex flexDir={["column", "row"]}justifyContent={"space-around"}  borderBottom={'2px solid'}
        borderColor={'secondary.400'} >
          <Text p={5}>
            <Icon as={BsGeoAlt} mr={2} /> Mendoza, Argentina
          </Text>
          <Text p={5}>
            <Icon as={MdEmail} mr={2} /> contacto@oceanohotels.com.ar
          </Text>
          <Text p={5}>
            <Icon as={FaPhone} mr={2} /> (0261)-123-4567
          </Text>
        </Flex>
      
        <Flex>
          <Box pt={4}>
            <HStack spacing={4} color={"primary.default"}>
              {/* <Text fontWeight="bold" mb={2}>
              Seguinos
            </Text> */}
              <Link>
                <Icon as={BsTwitterX} boxSize={6} />
              </Link>
              <Link>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
            </HStack>
          </Box>
        </Flex>
        <Flex fontSize="sm" pt={4} justifyContent={'space-evenly'}>
          <Text >
            © Producto FooTalent 2024
          </Text>
          { isMobil!=='base' &&
           <Text as='h5'>Todos los derechos reservados</Text>
          }
           </Flex>
      </Box>
    </>
  );
};
