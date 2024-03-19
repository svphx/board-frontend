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
import { useRegisterForm } from "./lib";

export const RegisterForm: FC = () => {
  const { formState, onSubmit, register } = useRegisterForm();

  return (
    <Center
      p="2rem"
      as="form"
      onSubmit={onSubmit}
      flexDirection="column"
      bgColor="layout.300"
      w="26rem"
      borderRadius="0.25rem"
    >
      <Heading as="h1" size="lg" mb="2rem">
        Регистрация
      </Heading>
      <FormControl isInvalid={!!formState.errors.name} isRequired>
        <FormLabel htmlFor="name" fontSize="sm">
          Имя пользователя
        </FormLabel>
        <Input id="name" type="text" {...register("name")} />
        <Text
          fontSize="0.75rem"
          as="span"
          height="1rem"
          display="block"
          mt="0.25rem"
          color="red.300"
        >
          {formState.errors.name && formState.errors.name.message}
        </Text>
      </FormControl>

      <FormControl isInvalid={!!formState.errors.email} isRequired mt="0.4rem">
        <FormLabel htmlFor="email" fontSize="sm">
          Эл. почта
        </FormLabel>
        <Input id="email" type="email" {...register("email")} />
        <Text
          fontSize="xs"
          as="span"
          height="1rem"
          display="block"
          mt="0.25rem"
          color="red.300"
        >
          {formState.errors.email && formState.errors.email.message}
        </Text>
      </FormControl>

      <FormControl
        isInvalid={!!formState.errors.password}
        isRequired
        mt="0.4rem"
      >
        <FormLabel htmlFor="password" fontSize="sm">
          Пароль
        </FormLabel>
        <Input id="password" type="password" {...register("password")} />
        <Text
          fontSize="xs"
          as="span"
          height="1rem"
          display="block"
          mt="0.25rem"
          color="red.300"
        >
          {formState.errors.password && formState.errors.password.message}
        </Text>
      </FormControl>
      <Button
        mt="3rem"
        colorScheme="blue"
        isLoading={formState.isSubmitting}
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

