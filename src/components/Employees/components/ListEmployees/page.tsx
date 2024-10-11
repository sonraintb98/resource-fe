"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import EmployeeTable from "@/components/Employees/components/ListEmployees/EmployeeTable";

import React from "react";

const ListEmployees: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Danh sách nhân viên" />

      <EmployeeTable />
    </>
  );
};

export default ListEmployees;
