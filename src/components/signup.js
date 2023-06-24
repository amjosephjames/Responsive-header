import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <Container>
      <Card>
        <Cardwrap>
          <H1>Sign Up</H1>
          <Form>
            <Hold>
              <Label>Username</Label>
              <Input>
                <input type="text" placeholder="fill in your username" />
              </Input>
            </Hold>
            <Hold>
              <Label>Email</Label>
              <Input>
                <input type="text" placeholder="fill in your email" />
              </Input>
            </Hold>
            <Hold>
              <Label>Password</Label>
              <Input>
                <input type="text" placeholder="fill in your password" />
              </Input>
            </Hold>
          </Form>

          <Button>Sign Up</Button>
          <Mid>
            Already have an account?<P to="/signin">Sign In</P>
          </Mid>
        </Cardwrap>
      </Card>
    </Container>
  );
};
export default Signup;

const Container = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
`;
const Card = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (max-width: 320px) {
    width: 300px;
  }
`;
const Cardwrap = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #020c1b;
`;
const Form = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Hold = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Label = styled.div`
  font-size: 13px;
`;
const Input = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #020c1b;
  input {
    width: 90%;
    height: 90%;
    background: inherit;
    opacity: none;
    border: none;
    outline: none;
    ::placeholder {
      color: #020c1b;
      font-size: 10px;
    }
  }
`;
const Button = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #020c1b;
  color: white;
  font-size: 13px;
`;
const Mid = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 12px;
  color: #020c1b;
  @media (max-width: 320px) {
    width: 64%;
  }
`;
const P = styled(Link)`
  font-size: 12px;
  color: red;
  text-decoration: none;
`;
