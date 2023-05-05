import * as Styled from './login.styled';
import Input from '../../components/forms/input/Input';
import Button from '../../components/forms/button/Button';
import { useState } from 'react';
import { emailValidation } from '../../utils/regExp.utils';
import Checkbox from '../../components/forms/checkbox/Checkbox';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [forms, setForms] = useState({
    email: '',
    password: '',
    isRemember: false
  });

  const [valid, setValid] = useState({
    email: true,
    password: true
  });

  const handleChange = (e) => {
    const { type } = e.target;
    if (type === 'checkbox') {
      const { name, checked } = e.target;
      setForms((current) => ({
        ...current,
        [name]: checked
      }));
    } else {
      const { name, value } = e.target;
      setForms((current) => ({
        ...current,
        [name]: value.trim()
      }));
    }
  };

  const handleEmailKeyUp = (e) => {
    const value = e.target.value;
    if (emailValidation(value)) {
      setValid((current) => ({
        ...current,
        email: true
      }));
    } else {
      if (value === '') {
        setValid((current) => ({
          ...current,
          email: true
        }));
      } else {
        setValid((current) => ({
          ...current,
          email: false
        }));
      }
    }
  };

  const handleLoginClick = () => {
    navigate('/Introduce');
  };

  const handleFindEmailClick = (e) => {
    e.preventDefault();
    alert('이메일 찾기 중비중..');
  };

  const handleFindPasswordClick = (e) => {
    e.preventDefault();
    alert('비밀번호 찾기 중비중..');
  };

  const handleJoinClick = () => {
    alert('회원가입 페이지 이동');
  };

  return (
    <Styled.LoginStyled>
      <img className="logo" style={{ width: '450px', height: '140px' }} src="/logo/logo.png" />
      <Styled.LoginTitleStyled>로그인</Styled.LoginTitleStyled>
      <Styled.LoginFormStyled>
        <Input placeholder="이메일을 입력하세요" value={forms.email} name="email" onChange={handleChange} onKeyUp={handleEmailKeyUp} />
        <Input type="password" placeholder="비밀번호를 입력하세요" value={forms.password} name="password" onChange={handleChange} />
      </Styled.LoginFormStyled>
      <Styled.LoginRememberStyled>
        <Checkbox checked={forms.isRemember} onChange={handleChange} name="isRemember">
          로그인 상태 유지
        </Checkbox>
      </Styled.LoginRememberStyled>
      {!valid.email && <Styled.LoginFormsValidStyled>올바른 이메일 형식이 아닙니다.</Styled.LoginFormsValidStyled>}
      {!valid.password && <Styled.LoginFormsValidStyled>올바른 비밀번호가 아닙니다.</Styled.LoginFormsValidStyled>}
      <Styled.LoginButtonWrapStyled>
        <Button disabled={forms.password === '' || forms.email === '' || !valid.email} onClick={handleLoginClick}>
          로그인
        </Button>
        <Styled.LoginFindIdAndPasswordStyled>
          <a onClick={handleFindEmailClick}>이메일 찾기</a> <span /> <a onClick={handleFindPasswordClick}>비밀번호 찾기</a>
        </Styled.LoginFindIdAndPasswordStyled>
        <Button outline onClick={handleJoinClick}>
          회원가입
        </Button>
      </Styled.LoginButtonWrapStyled>
    </Styled.LoginStyled>
  );
}
