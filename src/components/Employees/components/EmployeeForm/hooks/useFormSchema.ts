import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn, FieldError } from "react-hook-form";
import { EmployeeRequest } from "../../../models";

export type EmployeeFormFields =
  | "name"
  | "birthDay"
  | "address"
  | "phoneNumber"
  | "workingDay"
  | "CCCD"
  | "salary"
  | "status";

const isError =
  (form: UseFormReturn<EmployeeRequest>) =>
  (field: EmployeeFormFields): boolean | undefined => {
    return !!form.formState.errors[field];
  };

const getErrorMessage =
  (form: UseFormReturn<EmployeeRequest>) =>
  (field: EmployeeFormFields): string | undefined => {
    if ((form.formState.errors[field] as unknown as FieldError[])?.length) {
      return (form.formState.errors[field] as unknown as FieldError[])
        .map((error) => error.message)
        .join("\n");
    }
    return (form.formState.errors[field] as FieldError)?.message;
  };

export function useFormSchema() {
  const formSchema: yup.SchemaOf<EmployeeRequest> = yup.object({
    name: yup.string().required("Name is required."),
    birthDay: yup.string().required("Birth day is required."),
    address: yup.string().required("Address is required."),
    phoneNumber: yup.string().required("Phone number is required."),
    workingDay: yup.string().required("Working day is required."),
    CCCD: yup.string().required("CCCD is required."),
    salary: yup.number().required("Salary is required."),
    status: yup.string().required("Status is required."),
  });

  const form = useForm<EmployeeRequest>({
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
