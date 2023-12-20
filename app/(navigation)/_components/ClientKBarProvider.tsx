"use client";
import React from "react";
import { KBarProvider } from "kbar";

const ClientKBarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <KBarProvider>{children}</KBarProvider>;
};

export default ClientKBarProvider;
