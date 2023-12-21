import { useMultiSelect } from "../hooks/use-multi-select";

export const DropdownHeader = () => {
  const { t, value, options, valueRenderer } = useMultiSelect();

  const noneSelected = value.length === 0;
  const allSelected = value.length === options.length;
  const customText = valueRenderer && valueRenderer(value, options);

  const getSelectedText = () => value.map((s) => s.label).join(", ");

  if (noneSelected) {
    return <span className="gray">{customText || t("selectSomeItems")}</span>;
  }

  if (allSelected) {
    return <span>{t("allItemsAreSelected")}</span>;
  }

  return <span>{customText || getSelectedText()}</span>;
};
