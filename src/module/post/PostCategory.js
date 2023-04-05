import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
const PostCategoryStyled = styled.div`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  background-color: #f3f3f3;
  a {
    display: block;
  }
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: ${(props) => props.theme.grayF3};
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: white;
    `};
`;
const PostCategory = ({
  children,
  type = "primary",
  className = "post-category",
  to = "/",
}) => {
  return (
    <PostCategoryStyled type={type} className={className}>
      <NavLink to={to}> {children}</NavLink>
    </PostCategoryStyled>
  );
};

export default PostCategory;
