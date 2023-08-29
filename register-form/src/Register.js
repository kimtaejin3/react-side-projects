import { useState } from "react";
import { styled } from "styled-components";
import { AiFillInfoCircle } from "react-icons/ai";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassord, setConfirmedPassword] = useState("");

  const [usWarning, setUsWarning] = useState(true);
  const [pWarning, setPwarning] = useState(true);
  const [pcWarning, setPcWarning] = useState(true);

  const usernameChange = (e) => {
    const usernameRegex = /^[a-zA-Z0-9\-]+$/;
    const usernameInput = e.target.value;
    console.log(usernameRegex.test(usernameInput));
    setUsWarning(usernameRegex.test(usernameInput));
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    const userpasswordInput = e.target.value;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    setPwarning(passwordRegex.test(userpasswordInput));
    setPassword(userpasswordInput);
  };

  const passwordConfirmedChange = (e) => {
    const userpasswordInput = e.target.value;
    setPcWarning(password === userpasswordInput);
    setConfirmedPassword(userpasswordInput);
  };

  return (
    <Register_container>
      <Title>Register</Title>
      <form>
        <Section>
          <div>
            <label htmlFor="username">Username</label>
            <span style={{ marginLeft: "5px" }}>
              {username !== "" ? (usWarning ? "✔️" : "❌") : ""}
            </span>
          </div>
          <Input id="username" type="text" onChange={usernameChange} />
          {!usWarning && username !== "" && (
            <div
              style={{
                backgroundColor: "#eee",
                padding: "5px 14px",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            >
              <span>
                <AiFillInfoCircle style={{ color: "#aaa" }} />
              </span>
              <p style={{ color: "#aaa" }}>
                알파벳만 사용할 수 있으며 공백이나, '-'를 제외한 특수기호
                불가합니다.
              </p>
            </div>
          )}
        </Section>
        <Section>
          <div>
            <label htmlFor="password1">Password</label>
            <span style={{ marginLeft: "5px" }}>
              {password !== "" ? (pWarning ? "✔️" : "❌") : ""}
            </span>
            <Input id="password1" type="password" onChange={passwordChange} />
          </div>
          {!pWarning && password !== "" && (
            <div
              style={{
                backgroundColor: "#eee",
                padding: "5px 14px",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            >
              <span>
                <AiFillInfoCircle style={{ color: "#aaa" }} />
              </span>
              <p style={{ color: "#aaa" }}>
                8자 이상 입력해주시고, 알파벳, 숫자, 특수기호 (@$!%*#?&)를
                포함해주세요
              </p>
            </div>
          )}
        </Section>
        <Section>
          <div>
            <label htmlFor="password2">Confirm Password</label>
            <span style={{ marginLeft: "5px" }}>
              {confirmedPassord !== "" ? (pcWarning ? "✔️" : "❌") : ""}
            </span>
            <Input
              id="password2"
              type="password"
              onChange={passwordConfirmedChange}
            />
          </div>
          {!pcWarning && confirmedPassord !== "" && (
            <div
              style={{
                backgroundColor: "#eee",
                padding: "5px 14px",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            >
              <span>
                <AiFillInfoCircle style={{ color: "#aaa" }} />
              </span>
              <p style={{ color: "#aaa" }}>비밀번호가 일치하지 않습니다</p>
            </div>
          )}
        </Section>

        <Btn>SignUp</Btn>
      </form>
    </Register_container>
  );
}

const Register_container = styled.div`
  width: 380px;
  background-color: white;
  margin: 200px auto 0;
  padding: 20px;
  border-radius: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  margin-top: 10px;
  width: 100%;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid #888b8d;

  &:focus {
    outline: none;
    border: 2px solid #12539a;
  }
`;

const Btn = styled.button`
  border: none;
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-indent: 1px;
  cursor: pointer;
  opacity: 0.8;
  background-color: royalblue;
  color: white;
`;

const Title = styled.h1`
  color: #12539a;
  margin-bottom: 20px;
`;

export default Register;
