import React from "react";
import { ContentHeader } from "../atomos/ContentHeader";
import { DataUser } from "./DataUser";

export function Header({ state, setState }) {
  console.log();

  return (
    <ContentHeader>
      <DataUser state={state} setState={setState} />
    </ContentHeader>
  );
}
