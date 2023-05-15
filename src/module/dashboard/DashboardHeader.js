import { Button } from "components/button";

import { useAuth } from "contexts/auth-context";
import PageNotFound from "pages/NotFoundPage";
import React from "react";
import styled from "styled-components";
const DashboardHeaderStyles = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
`;

const DashboardHeader = () => {
  const { userInfo } = useAuth();
  if (!userInfo) return <PageNotFound></PageNotFound>;
  return (
    <DashboardHeaderStyles>
      <Button to="/manage/add-post" className="header-button" height="52px">
        Write new post
      </Button>
      <div className="header-avatar">
        <img src={userInfo.avatar} alt="" />
      </div>
    </DashboardHeaderStyles>
  );
};

export default DashboardHeader;
