import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import ListTables from "@/components/ListTables/page";

export const metadata: Metadata = {
  title: "Next.js Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const BasicListTablesPage: React.FC = () => {
  return (
    <DefaultLayout>
      <ListTables />
    </DefaultLayout>
  );
};

export default BasicListTablesPage;
