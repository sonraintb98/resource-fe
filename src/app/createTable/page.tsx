import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import CreateTable from "@/components/CreateTable/page";

export const metadata: Metadata = {
  title: "Next.js Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const BasicTablePage: React.FC = () => {
  return (
    <DefaultLayout>
      <CreateTable />
    </DefaultLayout>
  );
};

export default BasicTablePage;
