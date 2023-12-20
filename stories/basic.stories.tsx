import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { useState } from "react";

import MultiSelect from "../src/multi-select";
import { options } from "./constants";
import { TOption } from "../src/lib/interfaces";

export default {
  title: "Basic",
  decorators: [withKnobs],
};

export const ExampleDefault = () => {
  const [selections, setSelections] = useState<TOption[]>([]);

  return (
    <div>
      <MultiSelect
        options={options}
        hasSelectAll={boolean("hasSelectAll", true)}
        isLoading={boolean("isLoading", false)}
        shouldToggleOnHover={boolean("shouldToggleOnHover", false)}
        disableSearch={boolean("disableSearch", false)}
        value={selections}
        disabled={boolean("disabled", false)}
        onChange={(selected) => setSelections(selected)}
        onMenuToggle={(s) => console.debug("Select Toggle: ", s)}
        labelledBy={text("labelledBy", "Select Fruits")}
        className={text("className", "multi-select")}
      />
      <ul style={{ display: "flex", flexDirection: "column" }}>
        <h5>Selections:</h5>
        {selections.map(({ value, label }, index) => (
          <li key={value}>{label}</li>
        ))}
      </ul>
    </div>
  );
};

ExampleDefault.story = {
  name: "Basic",
};
