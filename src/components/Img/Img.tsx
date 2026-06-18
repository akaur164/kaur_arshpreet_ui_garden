import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "transparent"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export default function Img({
  src = "https://via.placeholder.com/300",
  alt = "Sample image",
  disabled = false,
  backgroundColor,
}: ImgProps) {
  return (
    <StyledImg
      src={src}
      alt={alt}
      disabled={disabled}
      backgroundColor={backgroundColor}
    />
  );
}