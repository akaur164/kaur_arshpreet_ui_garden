import HeroImage from "./HeroImage";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    src: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    title: "Welcome to UI Garden",
    subtitle: "A reusable React component library",
    src: "https://via.placeholder.com/1200x400",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: "Disabled Hero",
    subtitle: "This hero image is disabled",
    disabled: true,
  },
};