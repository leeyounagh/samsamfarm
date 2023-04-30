import { useForm, SubmitHandler } from 'react-hook-form';

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
    formState: { errors }
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data: FormValue) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <table>
        <tr>
          <td>
            <label>이메일</label>
          </td>
          <td>
            <input {...register('email')} type="email" />
          </td>
        </tr>
        <tr>
          <td>
            <label>비밀번호</label>
          </td>
          <td>
            <input {...register('password')} type="password" />
          </td>
        </tr>
        <tr>
          <td>
            <label>비밀번호 확인</label>
          </td>
          <td>
            <input {...register('password_confirm')} type="password" />
          </td>
        </tr>
        <tr>
          <td>
            <label>닉네임</label>
          </td>
          <td>
            <input {...register('nickname')} />
          </td>
        </tr>
        <tr>
          <td>
            <label>휴대폰 번호</label>
          </td>
          <td>
            <input {...register('phone')} />
          </td>
        </tr>
        <td>
          <label>MBTI</label>
        </td>
        <td>
          <input {...register('mbti')} />
        </td>
      </table>
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;
