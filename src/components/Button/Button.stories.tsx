import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    text: "Click Me",
    backgroundColor: "#007bff",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Button",
    disabled: true,
  },
};