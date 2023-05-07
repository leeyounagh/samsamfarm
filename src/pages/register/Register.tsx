import { useForm, SubmitHandler } from "react-hook-form";
import * as Styled from "./register.styled";

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

  const onSubmitHandler: SubmitHandler<FormValue> = (data: FormValue) => {
    console.log(data);
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
