import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<TextProps>`
  color: ${(props) => (props.disabled ? "grey" : props.color || "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-size: 16px;
`;

export default function Text({
  text = "Sample Text",
  color = "black",
  disabled = false,
}: TextProps) {
  return <StyledText color={color} disabled={disabled}>{text}</StyledText>;
}