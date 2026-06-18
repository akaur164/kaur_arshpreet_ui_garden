import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    title: "Student Card",
    content: "This is a reusable card component.",
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: "Disabled Card",
    content: "This card is disabled.",
    disabled: true,
  },
};