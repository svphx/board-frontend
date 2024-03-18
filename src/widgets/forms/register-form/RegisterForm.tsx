import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Text,
  Heading,
  Input,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { routes } from "shared";

export const RegisterForm: FC = () => {
  return (
    <Center
      p="2rem"
      as="form"
      flexDirection="column"
      bgColor="layout.300"
      w="26rem"
      borderRadius="0.25rem"
    >
      <Heading as="h1" size="lg" mb="2rem">
        Регистрация
      </Heading>
      <FormControl isRequired>
        <FormLabel htmlFor="name" fontSize="sm">
          Имя пользователя
        </FormLabel>
        <Input id="name" type="text" />
        <Text
          fontSize="0.75rem"
          as="span"
          height="1rem"
          display="block"
          mt="0.25rem"
          color="red.300"
        ></Text>
      </FormControl>

      <FormControl isRequired mt="0.4rem">
        <FormLabel htmlFor="email" fontSize="sm">
          Эл. почта
        </FormLabel>
        <Input id="email" type="email" />
        <Text
          fontSize="xs"
          as="span"
          height="1rem"
          display="block"
          mt="0.25rem"
          color="red.300"
        ></Text>
      </FormControl>

      <FormControl isRequired mt="0.4rem">
        <FormLabel htmlFor="password" fontSize="sm">
          Пароль
        </FormLabel>
        <Input id="password" type="password" />
        <Text
          fontSize="xs"
          as="span"
          height="1rem"
          display="block"
          mt="0.25rem"
          color="red.300"
        ></Text>
      </FormControl>
      <Button
        mt="3rem"
        colorScheme="blue"
        spinnerPlacement="end"
        loadingText="Регистрация"
        type="submit"
        w="100%"
      >
        Зарегистрироваться
      </Button>

      <Text fontSize="sm" mt="1rem">
        Есть аккаунт?{" "}
        <ChakraLink to={routes.login} as={RouterLink} color="blue.200">
          Войти
        </ChakraLink>
      </Text>
    </Center>
  );
};
