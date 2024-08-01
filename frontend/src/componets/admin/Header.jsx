import { Button, Flex, Img, useBreakpointValue } from "@chakra-ui/react"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext";



const Header = () => {
  const {logout, cookie} = useContext(UsuarioContext)
  const imgUrl = useBreakpointValue({
    base: "/img/logo2linea.svg",
    md: "/img/logo1linea.svg",
  });
  return (
    <Flex justify={'space-around'} h="100px" bg='primary.500'pt={2}>
    <Link to="/admin/home">
      <Img src={imgUrl} alt="logo"  />
    </Link>
    <Button 
    bgColor={'secondary.500'}
     w={'100px'} 
     mx={'10px'} 
     onClick={logout}
     >Logout</Button>
         <Button 
    bgColor={'secondary.500'}
     w={'100px'} 
     mx={'10px'} 
     onClick={cookie}
     >Cookie</Button>
  </Flex>
  )
}

export default Header