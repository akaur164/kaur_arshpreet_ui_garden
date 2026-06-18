import TableFooter from "./TableFooter";

export default {
  title: "Components/TableFooter",
  component: TableFooter,
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    text: "Total Students: 1",
    backgroundColor: "#f2f2f2",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Footer",
    disabled: true,
  },
};