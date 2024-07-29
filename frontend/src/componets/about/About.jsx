import { Box, Center, Img, Text } from "@chakra-ui/react";

export const About = () => {
  return (
    <Center
      bg={"secondary.200"}
      flexWrap={"wrap"}
      py={[2,'4.5em']}
      px={[2, '7.5em']}
      paddingTop={3}
      paddingBottom={5}
    >
      <Box
        display={"flex"}
        flexDirection={["column", "column", "row"]}
        justifyContent={"space-around"}
        p={"10px"}
      >
        <Box
          w={["100%", "100%", "50%"]}
          flexDirection={["column", "column", "row"]}
          fontFamily={"Poppins"}
          
        >
          <Text
            as="h1"
            w={'70%'}
            
            fontStyle={'normal'}
            fontSize={["1.2em", "1.5em", "2.9em"]}
            fontWeight={400}
            textAlign={"left"}
            lineHeight={'116%'}
          >
            Bienvenidos a Oceano Hotel
          </Text>
          <Text
            as="h3"
           fontSize={["0.9em", "1em", "1.1em"]}
           pr={10}
          >
            Ofrecemos una experiencia de lujo y comodidad en un entorno urbano
            vibrante. Con modernas instalaciones, un servicio excepcional y una
            ubicación céntrica, es el lugar ideal para viajeros de negocios,
            eventos corporativos y escapadas de ocio. Disfruta de nuestras
            elegantes habitaciones, deliciosas opciones gastronómicas y diversas
            amenidades que garantizan una estancia memorable.
          </Text>
        </Box>
        <Box flexDirection={["column", "row"]} w='36em' >
          <Img src="/img/about.png" />
        </Box>
      </Box>
    </Center>
  );
};
