import { Box, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

function Nosotros() {
  return (
    <>
      <Header />
      <Box as="section" p={4} m={"24px 20px 20px 40px"} fontFamily={"Poppins"}>
        <VStack
          spacing={4}
          align="stretch"
          textOverflow={"ellipsis"}
          overflow={"hidden"}
        >
          <Heading
            as="h1"
            fontsize={["2.em", "2.8em"]}
            textAlign={["center", "left"]}
            fontFamily={"Poppins"}
            color={"neutral.950"}
          >
            SOBRE NOSOTROS
          </Heading>
          <Box
            as={"article"}
            width="139.22px"
            height="4px"
            gap="4px"
            ml={["auto", "0"]}
          >
            <Image
              src="/img/lines.png"
              alt="Lines"
              width="100%"
              height="100%"
            />
          </Box>
          <Text color={"primary.500"} fontSize="2em" fontWeight="400">
            En Oceano Hotel, nos enorgullecemos de ofrecer una experiencia de
            lujo y confort en el corazón de la ciudad.
          </Text>
          <Text fontSize="1.5em" color={"neutral.900"}>
            Nuestro compromiso con la excelencia se refleja en cada detalle,
            desde nuestras elegantes habitaciones y modernas instalaciones hasta
            el servicio personalizado que brindamos a cada huésped. Ya sea que
            viajes por negocios o placer, nuestro objetivo es hacer de tu
            estancia una experiencia memorable y placentera.
          </Text>
          <Flex direction={"column"}>
            <Heading
              as="h2"
              fontWeight="400"
              fontSize={"2em"}
              color={"primary.500"}
              lineHeight={"125%"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
              py={5}
            >
              Valores
            </Heading>

            <Box
              textOverflow={"ellipsis"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"133%"}
              color={"neutral.800"}
            >
              <Text
                fontSize="1.5em"
                borderLeft={"9px solid"}
                borderLeftColor={"secondary.500"}
                px={16}
                mb={'1.5em'}
              >
                Excelencia en el Servicio: Nos esforzamos por proporcionar un
                servicio impecable y atento, anticipándonos a las necesidades de
                nuestros huéspedes y superando sus expectativas en cada
                interacción.
              </Text>

              <Text
                fontSize="1.5em"
                borderLeft={"9px solid"}
                borderLeftColor={"secondary.500"}
                px={16}
                my={'1.5em'}
              >
                Calidad y Confort: Nos dedicamos a mantener los más altos
                estándares de calidad en nuestras instalaciones y servicios,
                asegurando un ambiente cómodo y sofisticado para todos nuestros
                huéspedes.
              </Text>
           
              <Text fontSize="1.5em"
                borderLeft={"9px solid"}
                borderLeftColor={"secondary.500"}
                px={16}
                my={'1.5em'}
                >
                Integridad y Transparencia: Operamos con los más altos niveles
                de integridad y transparencia, asegurando la confianza y
                satisfacción de nuestros huéspedes y socios.
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

      <Footer />
    </>
  );
}

export default Nosotros;
