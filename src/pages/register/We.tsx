import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Styled from "./we.styled";

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
    // getValues,
    formState: { errors },
  } = useForm<FormValue>();

  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<FormValue> = async (data: FormValue) => {
    console.log(data);
    const body = {
      id: data.email,
      name: data.nickname,
      nickname: data.nickname,
      password: data.password,
      mbti: data.mbti,
      phone: data.phone,
    };

    try {
      const response = await axios.post(
        "http://34.64.51.215/samsamfarm/api/v1/auth/sign-in",
        body
      );
      const responseData = await response.data;
      navigate("/login");
    } catch (error) {
      alert("에러남");
    }
  };

  return (
    <Styled.register>
      <div style={{ fontSize: "2.5em" }}>회원가입</div>
      <Styled.form onSubmit={handleSubmit(onSubmitHandler)}>
        <Styled.table>
          <tr>
            <Styled.td>
              <label>이메일</label>
            </Styled.td>
            <td>
              <input
                {...register("email", {
                  required: true,
                })}
                type="email"
                style={{ width: "90%", fontSize: "1.3em" }}
              />
            </td>
          </tr>
          <tr>
            <Styled.td>
              <label>비밀번호</label>
            </Styled.td>
            <td>
              <input
                {...register("password", {
                  minLength: {
                    value: 5,
                    message: "Not enough password length(5)",
                  },
                })}
                type="password"
                style={{ width: "90%", fontSize: "1.3em" }}
              />
              <span>{errors?.password?.message}</span>
            </td>
          </tr>
          <tr>
            <Styled.td>
              <label>비밀번호 확인</label>
            </Styled.td>
            <td>
              <input
                {...register("password_confirm", {
                  validate: (value: string) => {
                    return value != watch("password")
                      ? "password not equal"
                      : true;
                  },
                })}
                type="password"
                style={{ width: "90%", fontSize: "1.3em" }}
              />
              <span>{errors?.password_confirm?.message}</span>
            </td>
          </tr>
          <tr>
            <Styled.td>
              <label>닉네임</label>
            </Styled.td>
            <td>
              <input
                {...register("nickname")}
                style={{ width: "90%", fontSize: "1.3em" }}
              />
            </td>
          </tr>
          <tr>
            <Styled.td>
              <label>휴대폰 번호</label>
            </Styled.td>
            <td>
              <input
                {...register("phone", {
                  pattern: {
                    value: /^010-[0-9]{4}-[0-9]{4}$/,
                    message: "Invalid phone number",
                  },
                })}
                style={{ width: "90%", fontSize: "1.3em" }}
              />
              <span>{errors?.phone?.message}</span>
            </td>
          </tr>
          <Styled.td>
            <label>MBTI</label>
          </Styled.td>
          <td>
            <input
              {...register("mbti")}
              style={{ width: "90%", fontSize: "1.3em" }}
            />
          </td>
        </Styled.table>
        <Styled.RegisterButton type="submit">회원가입</Styled.RegisterButton>
      </Styled.form>
    </Styled.register>
  );
};

export default SignupForm;
