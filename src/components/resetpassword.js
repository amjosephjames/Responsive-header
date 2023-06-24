import React from "react";
import styled from "styled-components";

const Resetpassword = () => {
  return (
    <Container>
      <Card>
        <Cardwrap>
          <Form>
            <Hold>
              <Label>Password</Label>
              <Input>
                <input type="text" placeholder="fill in your email" />
              </Input>
            </Hold>
            <Hold>
              <Label>Confirm Password</Label>
              <Input>
                <input type="text" placeholder="confirm your password" />
              </Input>
            </Hold>
          </Form>

          <Button>Reset Password</Button>
        </Cardwrap>
      </Card>
    </Container>
  );
};
export default Resetpassword;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
`;
const Card = styled.div`
  width: 350px;
  height: 260px;
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
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  width: 100%;
  height: 150px;
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
