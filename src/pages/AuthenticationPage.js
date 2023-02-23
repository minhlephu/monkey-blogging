import React from "react";
import styled from "styled-components";
const AuthenticationPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;
const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blog" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
      </div>
      {children}
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
