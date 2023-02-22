import { IconEyeOpen } from "components/icon";
import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px " : "20px")};
    background-color: "#ffffff";
    border-radius: 8px;
    border: 1px solid #999999;
    font-weight: 500;
    transition: all 0.2s linear;
    width: 100%;
  }
  input:focus {
    border: 1px solid #00b4aa;
  }
  input::-webkit-input-placeholder {
    color: #c4c4c4;
  }
  input::-moz-input-placeholder {
    color: #c4c4c4;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const Input = ({
  name = "",
  type = "text",
  children,

  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <InputStyles hasIcon={children ? true : false}>
      <input id={name} type={type} {...field} {...props} />
      {children ? <span className="input-icon">{children}</span> : null}
    </InputStyles>
  );
};
export default Input;
