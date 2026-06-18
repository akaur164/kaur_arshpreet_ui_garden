import TableCell from "./TableCell";

export default {
  title: "Components/TableCell",
  component: TableCell,
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    text: "Student",
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Cell",
    disabled: true,
  },
};