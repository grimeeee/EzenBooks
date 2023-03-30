import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import '../../css/login.css';
import { baseUrl } from '../commonApi/mainApi';

//회원가입
const Register = () => {
  const navigator = useNavigate();

  const [member, setMember] = useState({
    user_name: '',
    user_pwd: '',
    user_confirmpwd: '',
    user_nickname: '',
    user_email: '',
    user_role: 'ROLE_MEMBER',
  });

  //오류메세지
  const errorMessage = {
    user_name:
      '사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.',
    user_pwd:
      '최소 8자에 하나의 문자 및 하나의 숫자 및 하나의 특수 문자를 입력해주세요.',
    user_confirmpwd: '비밀번호가 일치하지 않습니다.',
    user_nickname:
      '최소 2자에 영어,한글,숫자 상관없이 10자 안으로 입력해주세요.',
    user_email: '이메일 형식에 맞게 작성해주세요.',
    user_role: 'ROLE_MEMBER',
  };

  //유효성 검사
  const [effect, setEffect] = useState({
    user_name: false,
    user_pwd: false,
    user_confirmpwd: false,
    user_nickname: false,
    user_email: false,
  });

  const onSubmit = async (e) => {
    const result = validChk('submit');
    if (!result.valid) {
      const msg = errorMessage[result.where];
      e.preventDefault();
      Swal.fire({ text: '가입완료', width: 400 });
    }
    e.preventDefault();
    window.location.href = '/';

    await axios
      .post(`${baseUrl}/register`, member, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        setMember({
          user_name: '',
          user_pwd: '',
          user_confirmpwd: '',
          user_nickname: '',
          user_email: '',
          user_role: 'ROLE_MEMBER',
        });
      })
      .then((response) => {
        navigator('/');
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // 정규식

  // 아이디 체크
  // 사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.
  const validChk = (target) => {
    if (target !== 'submit' && target === 'user_name') {
      const idRegExp = /^[A-Za-z0-9+]{5,}$/;
      if (!idRegExp.test(member.user_name)) {
        setEffect({ ...effect, user_name: false });
        return { valid: false, where: 'user_name' };
      } else {
        setEffect({ ...effect, user_name: true });
        console.log(effect);
      }
    }

    // 비밀번호 체크
    // 최소 8자에 하나의 문자 및 하나의 숫자 및 하나의 특수 문자 포함된 비밀번호인지
    if (target !== 'submit' && target === 'user_pwd') {
      const pwdRegExp =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g;
      if (!pwdRegExp.test(member.user_pwd)) {
        setEffect({ ...effect, user_pwd: false });
        return { valid: false, where: 'user_pwd' };
      } else {
        setEffect({ ...effect, user_pwd: true });
      }
    }

    // 비밀번호 확인
    if (target !== 'submit' && target === 'user_confirmpwd') {
      if (member.user_pwd !== member.user_confirmpwd) {
        setEffect({ ...effect, user_confirmpwd: false });
        return { valid: false, where: 'user_comfirmpwd' };
      } else {
        setEffect({ ...effect, user_confirmpwd: true });
      }
    }

    // 닉네임 확인
    if (target !== 'submit' && target === 'user_nickname') {
      const nicknameRegExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
      if (!nicknameRegExp.test(member.user_nickname)) {
        setEffect({ ...effect, user_nickname: false });
        return { valid: false, where: 'user_nickname' };
      } else {
        setEffect({ ...effect, user_nickname: true });
        console.log(effect);
      }
    }

    if (target !== 'submit' && target === 'user_email') {
      const emailRegExp =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegExp.test(member.user_email)) {
        setEffect({ ...effect, user_email: false });
        return { valid: false, where: 'user_email' };
      } else {
        setEffect({ ...effect, user_email: true });
      }
    }

    return true;
  };

  const handleValueChange = (e) => {
    // radio 버튼에서는 e.preventDefault()를 하면 더블클릭을 해줘야한다.
    // e.preventDefault();
    // setMember({ ...member, [e.target.name]: e.target.value });
    // const currentId = e.target.value;
    member[e.target.name] = e.target.value;

    validChk(e.target.name);
  };

  // 유효성 검사
  // const [userIdError, setUserIdError] = useState(false);
  // const [PasswordError, setPasswordError] = useState(false);
  // const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  // const [userNicknameError, setUserNicknameError] = useState(false);
  // const [emailError, setEmailError] = useState(false);

  return (
    <div className='container register-wrap'>
      <p id='register-title'>회원가입</p>
      <form onSubmit={onSubmit}>
        <div className='container register-body'>
          <div className='form-group'>
            <label>아이디</label>
            <br />
            <input
              maxLength={15}
              type='text'
              className='form-control'
              name='user_name'
              placeholder='Username'
              onChange={handleValueChange}
            />
            {/* 유효성체크 */}
            {effect.user_name ? (
              <span id='idMsg' style={{ color: 'green' }}>
                사용가능한 ID 입니다.
              </span>
            ) : (
              <span id='idMsg' style={{ color: 'red' }}>
                {/* {message.username} */}
              </span>
            )}

            {!effect.user_name && member.user_name.length > 0 && (
              <span id='idMsg' style={{ color: 'red' }}>
                {errorMessage.user_name}
              </span>
            )}
          </div>

          <div className='form-group'>
            <label>비밀번호</label>
            <br />
            <input
              maxLength={20}
              type='password'
              className='form-control'
              name='user_pwd'
              placeholder='Password'
              onChange={handleValueChange}
              autoComplete='off'
            />
            {/* 유효성체크 */}
            {effect.user_pwd ? (
              <span id='idMsg' style={{ color: 'green' }}>
                사용가능한 비밀번호 입니다.
              </span>
            ) : (
              <span id='idMsg' style={{ color: 'red' }}>
                {/* {message.username} */}
              </span>
            )}

            {!effect.user_pwd && member.user_pwd.length > 0 && (
              <span id='idMsg' style={{ color: 'red' }}>
                {errorMessage.user_pwd}
              </span>
            )}
          </div>

          <div className='form-group'>
            <label>비밀번호 확인</label>
            <br />
            <input
              maxLength={20}
              value={member.user_confirmpwd}
              type='password'
              className='form-control'
              name='user_confirmpwd'
              placeholder='ConfirmPassword'
              onChange={handleValueChange}
              autoComplete='off'
            />
            {effect.user_confirmpwd ? (
              <span id='idMsg' style={{ color: 'green' }}>
                비밀번호가 일치합니다.
              </span>
            ) : (
              <span id='idMsg' style={{ color: 'red' }}>
                {/* {message.passwordConfirm} */}
              </span>
            )}

            {!effect.user_confirmpwd && member.user_confirmpwd.length > 0 && (
              <span id='idMsg' style={{ color: 'red' }}>
                {errorMessage.user_confirmpwd}
              </span>
            )}
          </div>

          <div className='form-group'>
            <label>닉네임</label>
            <br />
            <input
              maxLength={20}
              type='text'
              className='form-control'
              name='user_nickname'
              placeholder='nickname'
              onChange={handleValueChange}
            />
            {effect.user_nickname ? (
              <span id='idMsg' style={{ color: 'green' }}>
                사용가능한 닉네임입니다
              </span>
            ) : (
              <span id='idMsg' style={{ color: 'red' }}>
                {/* {errorMessage.user_nickname} */}
              </span>
            )}
            {!effect.user_nickname && member.user_nickname.length > 0 && (
              <span id='idMsg' style={{ color: 'red' }}>
                {errorMessage.user_nickname}
              </span>
            )}
          </div>

          <div className='form-group'>
            <label>이메일</label>
            <input
              maxLength={50}
              type='email'
              className='form-control'
              name='user_email'
              placeholder='Email'
              onChange={handleValueChange}
            />
            {effect.user_email ? (
              <span id='idMsg' style={{ color: 'green' }}>
                사용가능한 이메일 입니다.
              </span>
            ) : (
              <span id='idMsg' style={{ color: 'red' }}>
                {/* {errorMessage.user_email} */}
              </span>
            )}

            {!effect.user_email && member.user_email.length > 0 && (
              <span id='idMsg' style={{ color: 'red' }}>
                {errorMessage.user_email}
              </span>
            )}
          </div>
          {/* <hr className='my-3' /> */}
          <div className='form-group'>
            {/* <div
              className='form-check form-check-inline  form-group'
              onChange={handleValueChange}
            > */}
            {/* <label className='mx-5'>
                <input
                  type='radio'
                  name='authRole'
                  value='ROLE_ADMIN'
                  className='form-check-input'
                />
                관리자
              </label>
              <label className='mx-5'>
                <input
                  type='radio'
                  name='authRole'
                  value='ROLE_MANAGER'
                  className='form-check-input'
                />
                매니저
              </label> */}
            {/* <label className='mx-5'>
                <input
                  type='radio'
                  name='authRole'
                  value='ROLE_MEMBER'
                  className='form-check-input'
                  //기본으로 사용
                  defaultChecked={true}
                />
                일반 사용자
              </label>
            </div> */}
          </div>
          <p className='register-signup'>
            <button
              type='submit'
              className='btn btn-search btn-signup'
              onClick={onSubmit}
            >
              가입 하기
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
