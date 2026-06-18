import { LabelProps } from "./Label.types";

export default function Label({
  text = "Sample Label",
  color = "black",
}: LabelProps) {
  return <label style={{ color }}>{text}</label>;
}