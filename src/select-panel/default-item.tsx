import type { TOption } from "../lib/interfaces";

type TProps = {
  checked: boolean;
  option: TOption;
  disabled?: boolean;
  onClick;
};

const DefaultItemRenderer = ({
  checked,
  option,
  onClick,
  disabled,
}: TProps) => (
  <div className={`item-renderer ${disabled ? "disabled" : ""}`}>
    <input
      type="checkbox"
      onChange={onClick}
      checked={checked}
      tabIndex={-1}
      disabled={disabled}
    />
    <span>{option.label}</span>
  </div>
);

export default DefaultItemRenderer;
