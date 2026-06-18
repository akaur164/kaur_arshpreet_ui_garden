import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "#007bff"};
  color: white;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default function Button({
  text = "Button",
  backgroundColor,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}