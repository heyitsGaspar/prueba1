import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validation/loginSchema";

type LoginFormValues = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export const useLogin = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Datos enviados:", data);
  };

  return { form, onSubmit };
};
