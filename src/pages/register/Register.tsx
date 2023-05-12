import { useState } from "react";
import Input from "../../components/forms/input/Input";
import Button from "../../components/forms/button/Button";
import {
  emailValidation,
  phoneNumberValidation,
  mbtiValidation,
} from "../../utils/regExp.utils";
import * as Styled from "./register.styled";
import { InputLabelStyled } from "../../components/forms/InputLabel/inputlabel.styled";
import axios from "axios";

interface Forms {
  email: string;
  password: string;
  passwordCheck: string;
  userName: string;
  phoneNumber: string;
  userMbti: string;
}

interface Valid {
  email: boolean;
  passwordCheck: boolean;
  phoneNumber: boolean;
  userMbti: boolean;
}

export default function Join() {
  const [forms, setForms] = useState<Forms>({
    email: "",
    password: "",
    passwordCheck: "",
    userName: "",
    phoneNumber: "",
    userMbti: "",
  });
  const [valid, setValid] = useState<Valid>({
    email: true,
    passwordCheck: true,
    phoneNumber: true,
    userMbti: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = e.target;
    if (type === "checkbox") {
      const { name, checked } = e.target;
      setForms({
        ...forms,
        [name]: checked,
      });
    } else {
      const { name, value } = e.target;

      if (name === "password") {
        setForms({
          ...forms,
          [name]: value.trim(),
          passwordCheck: "",
        });
        setValid((current) => ({
          ...current,
          passwordCheck: true,
        }));
      } else {
        setForms({
          ...forms,
          [name]: value.trim(),
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, userName, phoneNumber, userMbti } = forms;
    const data = {
      email,
      password,
      userName,
      phoneNumber,
      userMbti,
    };
    console.log(data);
    try {
      const response = await axios.post(
        "http://34.64.51.215/samsamfarm/api/v1/auth/sign-in",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

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

  const handlePasswordCheckKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const value = e.currentTarget.value;
    if (value === forms.password) {
      setValid((current) => ({
        ...current,
        passwordCheck: true,
      }));
    } else {
      if (value === "") {
        setValid((current) => ({
          ...current,
          passwordCheck: true,
        }));
      } else {
        setValid((current) => ({
          ...current,
          passwordCheck: false,
        }));
      }
    }
  };

  const handlePhoneNumberKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (phoneNumberValidation(value)) {
      setValid((current) => ({
        ...current,
        phoneNumber: true,
      }));
    } else {
      if (value === "") {
        setValid((current) => ({
          ...current,
          phoneNumber: true,
        }));
      } else {
        setValid((current) => ({
          ...current,
          phoneNumber: false,
        }));
      }
    }
  };

  const handleMbtiKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toUpperCase();
    if (mbtiValidation(value)) {
      setValid((current) => ({
        ...current,
        userMbti: true,
      }));
    } else {
      if (value === "") {
        setValid((current) => ({
          ...current,
          userMbti: true,
        }));
      } else {
        setValid((current) => ({
          ...current,
          userMbti: false,
        }));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Styled.JoinStyled>
        <img
          className="logo"
          style={{ width: "400px", height: "150px" }}
          src="/logo/logo.png"
        />
        <Styled.JoinTitleStyled>회원가입</Styled.JoinTitleStyled>
        <Styled.JoinFormsTitleStyled>기본정보</Styled.JoinFormsTitleStyled>
        <Styled.JoinFormStyled>
          <InputLabelStyled>* 이메일</InputLabelStyled>
          <Input
            placeholder="이메일을 입력하세요"
            name="email"
            value={forms.email}
            onChange={handleChange}
            onKeyUp={handleEmailKeyUp}
          />
          {!valid.email && (
            <Styled.JoinFormsValidStyled>
              올바른 이메일 형식이 아닙니다.
            </Styled.JoinFormsValidStyled>
          )}
          <InputLabelStyled>* 비밀번호</InputLabelStyled>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="password"
            value={forms.password}
            onChange={handleChange}
          />
          <InputLabelStyled>* 비밀번호 확인</InputLabelStyled>
          <Input
            type="password"
            placeholder="입력하신 비밀번호를 입력하세요"
            name="passwordCheck"
            value={forms.passwordCheck}
            onChange={handleChange}
            onKeyUp={handlePasswordCheckKeyUp}
            disabled={forms.password === ""}
          />
          {!valid.passwordCheck && (
            <Styled.JoinFormsValidStyled>
              비밀번호가 일치하지 않습니다.
            </Styled.JoinFormsValidStyled>
          )}
          <InputLabelStyled>* 닉네임</InputLabelStyled>
          <Input
            placeholder="닉네임을 입력하세요"
            name="userName"
            value={forms.userName}
            onChange={handleChange}
          />
          <InputLabelStyled>* 휴대전화</InputLabelStyled>
          <Input
            placeholder="전화번호를 입력하세요(숫자만)"
            name="phoneNumber"
            value={forms.phoneNumber}
            onChange={handleChange}
            onKeyUp={handlePhoneNumberKeyUp}
          />
          {!valid.phoneNumber && (
            <Styled.JoinFormsValidStyled>
              올바른 연락처 형식이 아닙니다.
            </Styled.JoinFormsValidStyled>
          )}
        </Styled.JoinFormStyled>
        <Styled.JoinFormsTitleStyled>MBTI</Styled.JoinFormsTitleStyled>
        <Styled.JoinFormStyled>
          <Input
            placeholder="본인의 MBTI를 입력하세요"
            name="userMbti"
            onChange={handleChange}
            onKeyUp={handleMbtiKeyUp}
          />
          {!valid.userMbti && (
            <Styled.JoinFormsValidStyled>
              올바른 MBTI 형식이 아닙니다.
            </Styled.JoinFormsValidStyled>
          )}
        </Styled.JoinFormStyled>
        <Styled.JoinButtonWrapStyled>
          <Button type="submit">가입</Button>
        </Styled.JoinButtonWrapStyled>
      </Styled.JoinStyled>
    </form>
  );
}
