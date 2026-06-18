import TableHeader from "./TableHeader";

export default {
  title: "Components/TableHeader",
  component: TableHeader,
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    text: "Name",
    backgroundColor: "#f2f2f2",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Header",
    disabled: true,
  },
};