import * as Styled from "./login.styled";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../components/forms/input/Input";
import Button from "../../components/forms/button/Button";

// import { emailValidation } from "../../utils/regExp.utils";
import Checkbox from "../../components/forms/checkbox/Checkbox";

export default function Login() {
  const [forms, setForms] = useState({
    email: "",
    password: "",
    isRemember: false,
  });

  const [valid, setValid] = useState({
    email: true,
    password: true,
  });

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

  const handleLoginClick = () => {
    alert("로그인 API");
  };

  // const handleFindEmailClick = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   alert("이메일 찾기 중비중..");
  // };

  // const handleFindPasswordClick = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   alert("비밀번호 찾기 중비중..");
  // };

  const handleJoinClick = () => {
    alert("회원가입 페이지 이동");
  };

  return (
    <Styled.LoginStyled>
      <img
        className="logo"
        style={{ width: "450px", height: "140px" }}
        src="/logo/logo.png"
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
      <Styled.LoginRememberStyled>
        <Checkbox
          checked={forms.isRemember}
          onChange={handleChange}
          name="isRemember"
        >
          로그인 상태 유지
        </Checkbox>
      </Styled.LoginRememberStyled>
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
        <Styled.LoginFindIdAndPasswordStyled>
          {/* <a onClick={handleFindEmailClick}>이메일 찾기</a> <span />{" "}
          <a onClick={handleFindPasswordClick}>비밀번호 찾기</a> */}
        </Styled.LoginFindIdAndPasswordStyled>
        <Button id="join-button" outline onClick={handleJoinClick}>
          회원가입
        </Button>
      </Styled.LoginButtonWrapStyled>
    </Styled.LoginStyled>
  );
}
