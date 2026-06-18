import Img from "./Img";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    src: "https://via.placeholder.com/300",
    alt: "Sample image",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    src: "https://via.placeholder.com/300",
    alt: "Disabled image",
    disabled: true,
  },
};