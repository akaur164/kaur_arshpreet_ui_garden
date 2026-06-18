import TableRow from "./TableRow";

export default {
  title: "Components/TableRow",
  component: TableRow,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};