import React from "react";
import styled from "styled-components";
import pix from "../components/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import MobileNav from "./mobilenav";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Logo src={pix} />
          <Navigator>
            <Span>Home</Span>
            <Span>About</Span>
            <Span>Contact</Span>
            <Span>Blog</Span>
            <Span>Help</Span>
            <Spaned to="/signin">Sign In</Spaned>
            <Button to="/signup">Sign Up</Button>
          </Navigator>
          <Menu>
            <AiOutlineMenu size={25} color="white" onClick={onToggle} />
          </Menu>
        </Wrapper>
      </Container>
      {toggle ? <MobileNav onToggle={onToggle} toggle={toggle} /> : null}
    </>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
  @media (max-width: 400px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
`;
const Logo = styled.img`
  width: 180px;
  height: 35px;
`;
const Navigator = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Span = styled.div`
  font-size: 13px;
  color: white;
`;
const Spaned = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  color: white;
`;
const Button = styled(Link)`
  width: 150px;
  text-decoration: none;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background: inherit;
`;
const Menu = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }

  /* font-size: 30px;
  cursor: pointer;
  color: #212429; */
`;
