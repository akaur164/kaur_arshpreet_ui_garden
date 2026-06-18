import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    options: ["Small", "Medium", "Large"],
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    options: ["Small", "Medium", "Large"],
    disabled: true,
  },
};