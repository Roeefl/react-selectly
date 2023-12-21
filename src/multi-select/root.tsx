import "../style.css";

import { MultiSelectProvider } from "../hooks/use-multi-select";
import { TRootProps } from "../lib/interfaces";
import { PropsWithChildren } from "react";

export function Root(props: PropsWithChildren<TRootProps>) {
  return (
    <MultiSelectProvider props={props}>
      <div className={`rmsc ${props.className || "multi-select"}`}>
        {props.children}
      </div>
    </MultiSelectProvider>
  );
}
