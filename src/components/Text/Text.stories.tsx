import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    text: "Sample Text",
    color: "black",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Text",
    disabled: true,
  },
};