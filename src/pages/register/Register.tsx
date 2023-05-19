import { useForm, SubmitHandler } from "react-hook-form";
import * as Styled from "./register.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormValue {
  email: string;
  password: string;
  password_confirm: string;
  nickname: string;
  phone: string;
  mbti: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const navigate = useNavigate();
  const onSubmitHandler: SubmitHandler<FormValue> = async (data: FormValue) => {
    const { email, password, password_confirm, phone, mbti, nickname } = data;
    const body = {
      email: email,
      password: password,
      password_confirm: password_confirm,
      phone: phone,
      mbti: mbti.toUpperCase(),
      nickname: nickname,
      name: nickname,
    };

    try {
      const response = await axios.post(
        "http://34.64.51.215/samsamfarm/api/v1/auth/sign-up",
        body
      );
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      if (err) {
        alert(err);
      }
    }
  };

  return (
    <Styled.JoinStyled onSubmit={handleSubmit(onSubmitHandler)}>
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
      <Styled.JoinTitleStyled>회원가입</Styled.JoinTitleStyled>
      <Styled.JoinFormsTitleStyled>기본정보</Styled.JoinFormsTitleStyled>
      <Styled.JoinFormStyled>
        <Styled.InputLabelStyled>* 이메일</Styled.InputLabelStyled>
        <Styled.InputStyled
          {...register("email", {
            required: true,
          })}
          type="email"
        />
        <Styled.InputLabelStyled>* 비밀번호</Styled.InputLabelStyled>
        <Styled.InputStyled
          {...register("password", {
            minLength: {
              value: 5,
              message: "비밀번호는 5자리 이상 입력 해주세요",
            },
          })}
          type="password"
        />
        <p
          style={{
            color: "red",
          }}
        >
          {errors?.password?.message}
        </p>
        <Styled.InputLabelStyled>* 비밀번호 확인</Styled.InputLabelStyled>
        <Styled.InputStyled
          {...register("password_confirm", {
            validate: (value: string) => {
              return value != watch("password")
                ? "비밀번호가 일치하지 않습니다."
                : true;
            },
          })}
          type="password"
        />
        <p
          style={{
            color: "red",
          }}
        >
          {errors?.password_confirm?.message}
        </p>
        <Styled.InputLabelStyled>* 닉네임</Styled.InputLabelStyled>
        <Styled.InputStyled {...register("nickname")} />
        <Styled.InputLabelStyled>* 연락처</Styled.InputLabelStyled>
        <Styled.InputStyled
          {...register("phone", {
            pattern: {
              value: /^010-[0-9]{4}-[0-9]{4}$/,
              message: "올바른 연락처 형식이 아닙니다.",
            },
          })}
        />
        <span
          style={{
            color: "red",
          }}
        >
          {errors?.phone?.message}
        </span>
      </Styled.JoinFormStyled>
      <Styled.JoinFormsTitleStyled>추가정보</Styled.JoinFormsTitleStyled>
      <Styled.JoinFormStyled>
        <Styled.InputLabelStyled>* MBTI</Styled.InputLabelStyled>
        <Styled.InputStyled {...register("mbti")} />
      </Styled.JoinFormStyled>

      <Styled.RegisterButton type="submit">회원가입</Styled.RegisterButton>
    </Styled.JoinStyled>
  );
};
export default SignupForm;
