import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<CardProps>`
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "white"};
  border: 1px solid #ddd;
  max-width: 350px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export default function Card({
  title = "Card Title",
  content = "This is card content.",
  backgroundColor = "white",
  disabled = false,
}: CardProps) {
  return (
    <StyledCard backgroundColor={backgroundColor} disabled={disabled}>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
}