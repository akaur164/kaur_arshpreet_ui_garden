import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const HeroContainer = styled.div<HeroImageProps>`
  width: 100%;
  min-height: 300px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "#333"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    min-height: 220px;
  }
`;

export default function HeroImage({
  src = "https://via.placeholder.com/1200x400",
  title = "Hero Image",
  subtitle = "This is a responsive hero image",
  disabled = false,
  backgroundColor,
}: HeroImageProps) {
  return (
    <HeroContainer
      src={src}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </HeroContainer>
  );
}