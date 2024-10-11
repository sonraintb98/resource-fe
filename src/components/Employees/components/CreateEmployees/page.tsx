"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { EmployeeForm } from "@/components/Employees/components/EmployeeForm";

const CreateEmployee: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Tạo nhân viên mới" />

      <EmployeeForm />
    </>
  );
};

export default CreateEmployee;
