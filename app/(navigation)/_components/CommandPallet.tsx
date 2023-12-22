"use client";
import React from "react";
import { KBarProvider } from "kbar";

const CommandPallet: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const actions = [
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "writing words",
      perform: () => (window.location.pathname = "blog"),
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email",
      perform: () => (window.location.pathname = "contact"),
    },
  ];
  return <KBarProvider actions={actions}>{children}</KBarProvider>;
};

export default CommandPallet;
