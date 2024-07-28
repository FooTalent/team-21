import {
  AspectRatio,
  Box,
  Button,
  Center,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Link } from "react-router-dom";
export const Interes = () => {
  return (
    <>
      <Header />
      <Center as="main" p="5%">
        <Box as="section" color={"neutral.950"}>
          <AspectRatio maxW="100%" ratio={2}>
            <iframe
              title="video institucional"
              src="https://fast.wistia.net/embed/iframe/icpjcp6mm8"
              allowFullScreen
            />
          </AspectRatio>

          <Box px={"3.5em"} py={"4.5em"} color={"neutral.900"}>
            <Text
              fontWeight={400}
              fontSize={"2.8em"}
              lineHeight={"116%"}
              mb={5}
            >
              Mendoza
            </Text>
            <Text overflow={"hidden"} fontSize={"1.3em"}>
              Mendoza te invita a sumergirte en un mundo de vinos excepcionales,
              paisajes deslumbrantes y experiencias inolvidables. A continuación
              te mostramos los sitios de mas interés y las mejores actividades
              que podrás hacer durante tu visita a Mendoza.
            </Text>

            <Wrap justify={"space-between"} textAlign={"justify"}>
              <WrapItem w={["100", "45%"]} flexDir={"column"} mt={"6em"}>
                <Image
                  bgImage="url('/img/vinos.jpeg')"
                  borderRadius={'16px'}
                  bgSize={'cover'}
                  bgRepeat={'no-repeat'}
                  bgPosition={'center'}
                 w='100%'
                h='320px'
                />
                <Text as="h4" color={"neutral.800"} my={"2.5em"}>
                  Recorre la Ruta del Vino, un circuito que te llevará por
                  viñedos centenarios, bodegas boutique y restaurantes gourmet
                  donde podrás degustar los mejores Malbec, Cabernet Sauvignon y
                  otras variedades de uva. Disfruta de paisajes impresionantes y
                  descubre la historia y tradición vitivinícola de la región en
                  cada parada.
                </Text>
              </WrapItem>
              {/* parque */}
              <WrapItem w={["100", "45%"]} flexDir={"column"} mt={"6em"}>
                <Box 
                  bgImage="url('/img/parque.jpeg')"
                  borderRadius={'16px'}
                  bgSize={'cover'}
                  bgRepeat={'no-repeat'}
                  bgPosition={'center'}
                 w='100%'
                h='320px'
                  
                >
                 
                </Box>
                <Text as="h4" color={"neutral.800"} my={"2.5em"}>
                  Parque General San Martín: Este es el pulmón verde de la
                  ciudad y el lugar ideal para relajarse y disfrutar de la
                  naturaleza. Aquí puedes caminar, andar en bicicleta, hacer un
                  picnic o simplemente leer un libro bajo la sombra de un árbol.
                  El parque también alberga varios museos y teatros,
                  ofreciéndote la oportunidad de explorar.
                </Text>
              </WrapItem>
              {/* ciclismo  */}
              <WrapItem w={["100", "45%"]} flexDir={"column"} mt={"6em"}>
                <Image
                  bgImage="url('/img/ciclismo.jpeg')"
                  borderRadius={'16px'}
                  bgSize={'cover'}
                  bgRepeat={'no-repeat'}
                  bgPosition={'center'}
                 w='100%'
                h='320px'
                />
                <Text as="h4" color={"neutral.800"} my={"2.5em"}>
                  Este es un paseo en bicicleta único que te permite recorrer
                  los viñedos y bodegas de Maipú, una de las zonas vitivinícolas
                  más importantes de Mendoza. El Bicitren consiste en dos
                  bicicletas adaptadas a las vías del tren que llevan a un grupo
                  de turistas a través de los viñedos. Durante el recorrido, un
                  guía te irá explicando la historia y la cultura del vino en
                  Mendoza.
                </Text>
              </WrapItem>
              {/* aconcagua  */}
              <WrapItem w={["100", "45%"]} flexDir={"column"} mt={"6em"}>
                <Image
                  bgImage="url('/img/aconcagua.jpeg')"
                  borderRadius={'16px'}
                  bgSize={'cover'}
                  bgRepeat={'no-repeat'}
                  bgPosition={'center'}
                 w='100%'
                h='320px'
                />
                <Text as="h4" color={"neutral.800"} my={"2.5em"}>
                  Aconcagua: El Aconcagua es la montaña más alta de América y un
                  desafío para cualquier alpinista. Si te atreves a escalarla,
                  te esperan unas vistas increíbles y una experiencia
                  inolvidable. La ascensión no solo pondrá a prueba tus
                  habilidades, sino que también te permitirá conectarte
                  profundamente con la majestuosidad y la belleza natural de
                  esta imponente cumbre.
                </Text>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Center>
      <Center>
        <Button mb={2} variant={"filled"} marginBottom={4}>
          <Link to={"/consulta"}>Consulta</Link>
        </Button>
      </Center>
      <Footer />
    </>
  );
};
