import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  type RegisterFormSchema,
  registerFormSchema,
} from "./registerFormSchema";

export const useRegisterForm = () => {
  const { handleSubmit, formState, register } = useForm<RegisterFormSchema>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: zodResolver(registerFormSchema),
    mode: "all",
  });
  const onRegister: SubmitHandler<RegisterFormSchema> = async (userDto) => {
    console.log("register form", userDto);
  };
  const onSubmit = handleSubmit(onRegister);

  return { formState, onSubmit, register };
};
