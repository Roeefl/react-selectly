import { ReactNode } from "react";

export type TOption = {
  value;
  label: string;
  key?: string;
  disabled?: boolean;
};

export interface SelectProps {
  options: TOption[];
  value: TOption[];
  onChange: (options: TOption[]) => void;
  valueRenderer?: (selected: TOption[], options: TOption[]) => ReactNode;
  ItemRenderer?;
  ArrowRenderer?: ({ expanded }) => JSX.Element;
  isLoading?: boolean;
  disabled?: boolean;
  disableSearch?: boolean;
  shouldToggleOnHover?: boolean;
  hasSelectAll?: boolean;
  filterOptions?: (
    options: TOption[],
    filter: string
  ) => Promise<TOption[]> | TOption[];
  overrideStrings?: { [key: string]: string };
  labelledBy: string;
  className?: string;
  onMenuToggle?;
  ClearIcon?: ReactNode;
  debounceDuration?: number;
  ClearSelectedIcon?: ReactNode;
  defaultIsOpen?: boolean;
  isOpen?: boolean;
  isCreatable?: boolean;
  onCreateOption?;
  closeOnChangedValue?: boolean;
}
