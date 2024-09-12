import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn, FieldError } from "react-hook-form";
import { LoginRequest } from "@/components/auth/models";

export type LoginFormFields = "email" | "password";

const isError =
  (form: UseFormReturn<LoginRequest>) =>
  (field: LoginFormFields): boolean | undefined => {
    return !!form.formState.errors[field];
  };

const getErrorMessage =
  (form: UseFormReturn<LoginRequest>) =>
  (field: LoginFormFields): string | undefined => {
    if ((form.formState.errors[field] as unknown as FieldError[])?.length) {
      return (form.formState.errors[field] as unknown as FieldError[])
        .map((error) => error.message)
        .join("\n");
    }
    return (form.formState.errors[field] as FieldError)?.message;
  };

export function useFormSchema() {
  const formSchema: yup.SchemaOf<LoginRequest> = yup.object({
    email: yup.string().required("Email is required."),
    password: yup
      .string()
      .required("Password is required.")
      .min(5, "Password should minimum 5 characters."),
  });

  const form = useForm<LoginRequest>({
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: yupResolver(formSchema),
    // defaultValues: {
    //   email: 'test1@test.com',
    //   password: 'Test1@test',
    // },
  });

  return {
    form,
    formSchema,
    isError: isError(form),
    getErrorMessage: getErrorMessage(form),
  };
}
