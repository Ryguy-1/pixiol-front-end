import React from "react";
import { Command } from "./command-pallet-context";

const CommandPaletteItem: React.FC<Command> = ({ name, iconPath, action }) => {
  return (
    <div onClick={action}>
      <div>{name}</div>
      <div>{iconPath}</div>
    </div>
  );
};

export default CommandPaletteItem;
