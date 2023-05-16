import * as Styled from "./login.styled";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../components/forms/input/Input";
import Button from "../../components/forms/button/Button";
import { emailValidation } from "../../utils/regExp.utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    email: true,
    password: true,
  });
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | FormEvent<HTMLFormElement>
  ) => {
    const { type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      const { name, checked } = e.target as HTMLInputElement;
      setForms((current) => ({
        ...current,
        [name]: checked,
      }));
    } else {
      const { name, value } = e.target as HTMLInputElement;
      setForms((current) => ({
        ...current,
        [name]: value.trim(),
      }));
    }
  };

  const handleEmailKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (emailValidation(value)) {
      setValid((current) => ({
        ...current,
        email: true,
      }));
    } else {
      if (value === "") {
        setValid((current) => ({
          ...current,
          email: true,
        }));
      } else {
        setValid((current) => ({
          ...current,
          email: false,
        }));
      }
    }
  };

  const handleLoginClick = async () => {
    const body = {
      email: forms.email,
      password: forms.password,
    };
    try {
      const response = await axios.post(
        "http://34.64.51.215/samsamfarm/api/v1/auth/sign-in",
        body
      );
      localStorage.setItem("JWtToken", response.data.data.accessToken);
      navigate("/story/introduce");
    } catch (err) {
      if (err) {
        alert(err);
      }
    }
  };

  return (
    <Styled.LoginStyled>
      <img
        className="logo"
        style={{
          width: "100%",
          maxWidth: "450px",
          height: "auto",
          maxHeight: "140px",
        }}
        src="/logo/logo.png"
        alt="Logo"
      />
      <Styled.LoginTitleStyled>로그인</Styled.LoginTitleStyled>
      <Styled.LoginFormStyled>
        <Input
          placeholder="이메일을 입력하세요"
          value={forms.email}
          name="email"
          onChange={handleChange}
          onKeyUp={handleEmailKeyUp}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={forms.password}
          name="password"
          onChange={handleChange}
        />
      </Styled.LoginFormStyled>
      {!valid.email && (
        <Styled.LoginFormsValidStyled>
          올바른 이메일 형식이 아닙니다.
        </Styled.LoginFormsValidStyled>
      )}
      {!valid.password && (
        <Styled.LoginFormsValidStyled>
          올바른 비밀번호가 아닙니다.
        </Styled.LoginFormsValidStyled>
      )}
      <Styled.LoginButtonWrapStyled>
        <Button
          id="login-button"
          disabled={forms.password === "" || forms.email === "" || !valid.email}
          onClick={handleLoginClick}
        >
          로그인
        </Button>

        <Button
          id="join-button"
          outline
          onClick={() => {
            navigate("/register");
          }}
        >
          회원가입
        </Button>
      </Styled.LoginButtonWrapStyled>
    </Styled.LoginStyled>
  );
}
