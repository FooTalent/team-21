import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useEffect, useState } from "react";

import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, usuario, userSave } = useContext(UsuarioContext);

  const [ver, setVer] = useState("password");

  function verClave(event) {
    event.preventDefault();
    ver == "password" ? setVer("text") : setVer("password");
  }
  useEffect(() => {
    userSave();
  }, []);

  return (
    <VStack
      h={"100vh"}
      minH={"650px"}
      justifyContent={"center"}
      bgImage={'url("/img/fondoAdminDesktop.jpeg")'}
    >
      <Box
        bgColor={"primary.600"}
        p="2%"
        h={"250px"}
        borderRadius={"10px"}
        boxShadow={"5px -5px 10px #fff"}
      >
        <Box>
          {error != "" && (
            <Text
              as="h2"
              color="red"
              fontWeight={"bold"}
              bgColor={"#f9bbbb"}
              p="10px"
              m="10px"
              borderRadius={"10px"}
            >
              {error}
            </Text>
          )}
        </Box>
        <Formik
          initialValues={{ usuario: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const loginSuccessful = await login(values);
              if (loginSuccessful) {
                const origin = location.state?.from?.pathname || "/admin/home";
                navigate(origin, { replace: true });
              } else {
                // Si el login no fue exitoso, no navegamos
                console.log("Login fallido");
                // Aquí puedes agregar alguna lógica para mostrar un mensaje de error al usuario
              }
            } catch (error) {
              console.error("Error durante el login:", error);
              // Aquí puedes manejar cualquier error inesperado
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="usuario">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.usuario && form.touched.usuario}
                  >
                    <FormLabel
                      htmlFor="usuario"
                      fontWeight="bold"
                      color={"primary.200"}
                    >
                      Usuario
                    </FormLabel>
                    <Input
                      {...field}
                      id="usuario"
                      placeholder="usuario"
                      borderColor={"primary.200"}
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>{form.errors.usuario}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel
                      htmlFor="password"
                      fontWeight="bold"
                      color={"primary.200"}
                    >
                      Password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...field}
                        id="password"
                        type={ver}
                        placeholder="password"
                        focusBorderColor="rgba(0,0,0,0.04)"
                        borderColor={"primary.200"}
                      />
                      <InputRightElement>
                        {ver == "password" && (
                          <ViewIcon
                            w="60px"
                            boxSize="20px"
                            mr="2px"
                            color="grey"
                            onClick={verClave}
                          />
                        )}
                        {ver == "text" && (
                          <ViewOffIcon
                            w="60px"
                            boxSize="20px"
                            mr="2px"
                            color="grey"
                            onClick={verClave}
                          />
                        )}
                      </InputRightElement>
                    </InputGroup>

                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="filled"
                m="10px"
              >
                Verificar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </VStack>
  );
};
