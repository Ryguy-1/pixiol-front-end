import React from "react";

const SideMenuContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function SideMenuProvider({
  children,
  startOpen = false,
}: {
  children: React.ReactNode;
  startOpen?: boolean;
}): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(startOpen);

  return (
    <SideMenuContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </SideMenuContext.Provider>
  );
}

export function useSideMenu(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const context = React.useContext(SideMenuContext);

  if (context === undefined) {
    throw new Error("useSideMenu must be used within a SideMenuProvider");
  }

  return context;
}
