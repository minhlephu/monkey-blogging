import Header from "components/layout/Header";
import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import React from "react";
import styled from "styled-components";
const HomePageStyleds = styled.div``;
const HomePage = () => {
  return (
    <HomePageStyleds>
      <Header></Header>
    </HomePageStyleds>
  );
};

export default HomePage;
