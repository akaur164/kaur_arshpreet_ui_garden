import Table from "./Table";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    disabled: false,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};