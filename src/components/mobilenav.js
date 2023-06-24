import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import pix from "../components/logo.svg";
import { MdHighlightOff } from "react-icons/md";
import { Link } from "react-router-dom";
//either left right top bottom
const MobileNav = ({ onToggle, toggle }) => {
  return (
    <Container>
      <Fade top>
        <Wrapper>
          <Top>
            <Logo src={pix} />
            <Cancel>
              <MdHighlightOff size={25} color="white" onClick={onToggle} />
            </Cancel>
          </Top>
          <Hold>
            {/* <Logo src={pix} /> */}
            <Navigator>
              <Span>Home</Span>
              <Span>About</Span>
              <Span>Contact</Span>
              <Span>Blog</Span>
              <Span>Help</Span>
              <Spaned to="/signin">Sign In</Spaned>
              <Button to="/signup">Sign Up</Button>
            </Navigator>
          </Hold>
        </Wrapper>
      </Fade>
    </Container>
  );
};
export default MobileNav;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background: rgba(0, 0, 0, 0.5); */
  /* background-color:#020c1b; */

  position: absolute;
  top: 0;
`;

const Wrapper = styled.div`
  /* width: 300px; */
  width: 100%;
  /* height: 90vh; */
  height: 100vh;
  /* background: white; */
  background-color: #020c1b;
  border-radius: 0 0 10px 0;
  display: none;
  flex-direction: column;
  @media (max-width: 900px) {
    display: flex;
  }
`;
const Top = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  justify-content: space-between;
  flex-direction: row;
  /* font-size: 30px; */
`;
const Hold = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Cancel = styled.div`
  display: flex;
  margin-right: 30px;
  margin-top: 65px;
  cursor: pointer;
  opacity: 0.5;
`;
const Logo = styled.img`
  width: 180px;
  height: 35px;
  margin-left: 30px;
  margin-top: 65px;
`;
const Navigator = styled.div`
  width: 100%;
  flex: 0.8;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 90%;
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
