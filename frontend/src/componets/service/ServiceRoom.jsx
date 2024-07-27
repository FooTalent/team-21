import {
  AspectRatio,
  Box,
  Center,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export const ServiceRoom = ({ title, img, desc }) => {
  return (
    

      <Box position="relative"
       width="66vw" 
       height="400px" 
       borderRadius="md" 
       overflow="hidden"
       mb={5}
       mt={5}
        // boxShadow="md"
        >
      <Image src={img} alt={title} objectFit="cover" height="75%" width="100%" />

      <Flex
      direction={'column'}
        position="absolute"
        bottom="20px"
        left="10%"
        borderRadius={"0px 0px 42px 42px"}
        width="80%"
        height="50%"
        // backgroundColor="rgba(0, 0, 0, 0.6)"
       bg='white'
       borderTop={"19px solid"}
        borderTopColor={"primary.500"}
        backdropBlur={'62.54px'}
        boxShadow=" 0px 4px 30px 0px #00000040"
      
        alignItems="center"
        justifyContent="center"
      >
        <Text 
        color="primary.500" 
        fontSize="xl"
         width="90%" 
        textAlign="center"
        mb={3}
        mt={3}
        >
          {title}
        </Text>
        <Text color="primary.500" fontSize="xl" width="90%" textAlign="center">
          {desc}
        </Text>
      </Flex>
    </Box>
   
   
  );
};
