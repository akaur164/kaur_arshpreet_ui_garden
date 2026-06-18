import RadioButton from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    label: "Select Option",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Option",
    disabled: true,
  },
};