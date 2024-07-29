import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Img,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { LinkHover } from "./LinkHover";

export const Header = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imgUrl = useBreakpointValue({
    base: "/img/logo2linea.svg",
    md: "/img/logo1linea.svg",
  });

  return (
    <Box>
      <Box>
        <Flex
          h={"5.5em"}
          as="nav"
          justifyContent="space-between"
          alignItems={"center"}
          wrap="wrap"
          px="4.5em"
          pb="1em"
          bg="brand.light"
          color={"white"}
        >
          <Flex align="center" h="100px">
            <Link to="/">
              <Img src={imgUrl} alt="logo" width={"250px"} />
            </Link>
          </Flex>

          <Flex
           spacing={8} 
           width={'35em'}
           justifyContent={'center'}
           gap={'1em'}
           flexShrink={0}
           display={{ base: "none", sm: "flex" }}
           mr={"5%"}>
            <LinkHover to="/nosotros" currentPath={location.pathname}>
              Sobre Nosotros
            </LinkHover>
            <LinkHover to="/interes" currentPath={location.pathname}>
              Sitios de Interes
            </LinkHover>

         
            {/* <Box>
              <IconButton
                ml={4}
                aria-label="Toggle Color Mode"
                color={colorMode === "dark" ? "text.default" : "text.dark"}
                bg={"transparent"}
                icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
              />
            </Box> */}
          </Flex>
          <Button variant="filled">
              <Link to={"/consulta"}>Consultar</Link>
            </Button>

          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ sm: "none" }}
            onClick={onOpen}
            color="secondary.500"
            bg="brand.default"
          />
        </Flex>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="brand.light" color="secondary.500">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} alignItems={"left"}>
                <Box
                  borderLeft={"2px solid"}
                  borderColor={" secondary.200"}
                  pl={25}
                >
                  <Link to={"/nosotros"}>Sobre Nosotros</Link>
                </Box>
                {/* <Box
                  borderLeft={"2px solid"}
                  borderColor={" secondary.200"}
                  pl={25}
                >
                  <Link to={"/room"}>Habitaciones</Link>
                </Box> */}

                <Box
                  borderLeft={"2px solid"}
                  borderColor={" secondary.200"}
                  pl={25}
                >
                  <Link to={"/interes"}>Sitios de Interes</Link>
                </Box>

                <Button>
                  <Link to={"/consulta"}>Consulta</Link>
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};
