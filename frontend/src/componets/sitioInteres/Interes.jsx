import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
export const Interes = () => {
  return (
    <Flex
      minW={"300px"}
      width={["100", "100", "95", "90", "90"]}
      flexDir={"column"}
    >
      <Header />
      <Box color="black" p={5}>
        <Box>
          <Text fontWeight={600} fontSize={"1.2em"} textAlign={"center"} mb={5}>
            Mendoza
          </Text>
          <Text>
            Mendoza te invita a sumergirte en un mundo de vinos excepcionales,
            paisajes deslumbrantes y experiencias inolvidables. A continuación
            te mostramos los sitios de mas interés y las mejores actividades que
            podrás hacer durante tu visita a Mendoza.
          </Text>
        </Box>
        <Stack>
          <Box>
            <Image src="/img/vinos.jpeg" borderRadius={"35px"} p={5} w={'395px'}h={'320px'}/>
            <Text>
              Recorre la Ruta del Vino, un circuito que te llevará por viñedos
              centenarios, bodegas boutique y restaurantes gourmet donde podrás
              degustar los mejores Malbec, Cabernet Sauvignon y otras variedades
              de uva. Disfruta de paisajes impresionantes y descubre la historia
              y tradición vitivinícola de la región en cada parada.
            </Text>
          </Box>
          {/* parque */}
          <Box>
            <Image src="/img/parque.jpeg" borderRadius={"35px"} p={5} w={'395px'}h={'320px'}/>
            <Text>
              Parque General San Martín: Este es el pulmón verde de la ciudad y
              un lugar ideal para relajarse y disfrutar de la naturaleza. Puedes
              caminar, andar en bicicleta, hacer un picnic o simplemente
              sentarte a leer un libro bajo la sombra de un árbol. También hay
              varios museos y teatros en el parque, por lo que puedes aprovechar
              para visitar alguno de ellos.
            </Text>
          </Box>
          {/* ciclismo  */}
          <Box>
            <Image src="/img/ciclismo.jpeg" borderRadius={"35px"} p={5} w={'395px'}h={'320px'}/>
            <Text>
              Este es un paseo en bicicleta único que te permite recorrer los
              viñedos y bodegas de Maipú, una de las zonas vitivinícolas más
              importantes de Mendoza. El Bicitren consiste en dos bicicletas
              adaptadas a las vías del tren que llevan a un grupo de turistas a
              través de los viñedos. Durante el recorrido, un guía te irá
              explicando la historia y la cultura del vino en Mendoza. El
              Bicitren sale desde la Estación Paso de los Andes en Chacras de
              Coria y dura aproximadamente 2 horas y media.
            </Text>
          </Box>
          {/* aconcagua  */}
          <Box>
            <Image src="/img/aconcagua.jpeg" borderRadius={"35px"} p={5} w={'395px'}h={'320px'}/>
            <Text>
              Aconcagua: El Aconcagua es la montaña más alta de América y un
              desafío para cualquier alpinista. Si te atreves a escalarla, te
              esperan unas vistas increíbles y una experiencia inolvidable.
            </Text>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </Flex>
  );
};