import React from "react";
import { ContentHeader } from "../atomos/ContentHeader";
import { DataUser } from "./DataUser";

export function Header({ stateConfig }) {
  console.log();

  return (
    <ContentHeader>
      <DataUser stateConfig={stateConfig} />
    </ContentHeader>
  );
}
