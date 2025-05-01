import React from "react";
import { ContentHeader } from "../atomos/ContentHeader";
import { DataUser } from "./DataUser";

export function Header() {
  console.log();

  return (
    <ContentHeader>
      <DataUser />
    </ContentHeader>
  );
}
