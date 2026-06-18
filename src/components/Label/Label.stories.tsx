import Label from "./Label";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
  },
};

export const Default = {
  args: {
    text: "Sample Label",
    color: "black",
  },
};
export const Disabled = {
  args: {
    text: "Disabled Label",
    color: "grey",
  },
};