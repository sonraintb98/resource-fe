import React from "react";
import { useFormSchema } from "@/components/Employees/components/EmployeeForm/hooks";
import { useSubmitEmployee } from "@/components/Employees/hooks/api/useSubmitCreateEmployee";
import { EmployeeRequest } from "@/components/Employees/models";
import { useRouter } from "next/navigation";
import { ErrorResponse } from "@/shared/configs";

export function EmployeeForm(): React.ReactElement {
  const router = useRouter();
  const { mutateAsync: postEmployee } = useSubmitEmployee();
  const {
    form: { formState, register, reset, handleSubmit: handleFormSubmit },
    isError,
    getErrorMessage,
  } = useFormSchema();
  const [error, setError] = React.useState("");
  const onSubmit = async (formData: EmployeeRequest) => {
    try {
      const result = await postEmployee(formData);
      if (result) {
        reset(formData);
        router.push("/listEmployees");
      }
    } catch (error) {
      setError((error as ErrorResponse).message);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Thông tin nhân viên mới
        </h3>
      </div>
      <form onSubmit={handleFormSubmit(onSubmit)}>
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Họ và tên
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Enter your first name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Ngày sinh
              </label>
              <input
                {...register("birthDay")}
                id="birthDay"
                type="text"
                placeholder="Enter your last name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Địa chỉ
              </label>
              <input
                {...register("address")}
                id="address"
                type="text"
                placeholder="Enter your first name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Số điện thoại
              </label>
              <input
                {...register("phoneNumber")}
                id="phoneNumber"
                type="text"
                placeholder="Enter your last name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Ngày làm việc
              </label>
              <input
                {...register("workingDay")}
                id="workingDay"
                type="text"
                placeholder="Enter your first name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Căn cước công dân
              </label>
              <input
                {...register("CCCD")}
                id="CCCD"
                type="text"
                placeholder="Enter your last name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Lương
              </label>
              <input
                {...register("salary")}
                id="salary"
                type="text"
                placeholder="Enter your first name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Trạng thái
              </label>
              <input
                {...register("status")}
                id="status"
                type="text"
                placeholder="Enter your status"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* <div className="w-full xl:w-1/2">
              <SelectGroupStatus />
            </div> */}
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Tạo nhân viên mới
          </button>
        </div>
      </form>
    </div>
  );
}
