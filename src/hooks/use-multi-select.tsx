import React, { useEffect, useState } from "react";

import { TOption, TRootProps } from "../lib/interfaces";

const defaultStrings = {
  allItemsAreSelected: "All items are selected.",
  clearSearch: "Clear Search",
  clearSelected: "Clear Selected",
  noOptions: "No options",
  search: "Search",
  selectAll: "Select All",
  selectAllFiltered: "Select All (Filtered)",
  selectSomeItems: "Select...",
  create: "Create",
};

const defaultProps: Partial<TRootProps> = {
  value: [],
  hasSelectAll: true,
  className: "multi-select",
  debounceDuration: 200,
  options: [] as TOption[],
};

interface MultiSelectContextProps extends TRootProps {
  t: (key: string) => string;
  setOptions?;
}

interface MultiSelectProviderProps {
  props: TRootProps;
  children;
}

const MultiSelectContext = React.createContext<MultiSelectContextProps>(
  {} as MultiSelectContextProps
);

export const MultiSelectProvider = ({
  props,
  children,
}: MultiSelectProviderProps) => {
  const [options, setOptions] = useState(props.options);
  const t = (key) => props.overrideStrings?.[key] || defaultStrings[key];

  useEffect(() => {
    setOptions(props.options);
  }, [props.options]);

  return (
    <MultiSelectContext.Provider
      value={{ t, ...defaultProps, ...props, options, setOptions }}
    >
      {children}
    </MultiSelectContext.Provider>
  );
};

export const useMultiSelect = () => React.useContext(MultiSelectContext);
