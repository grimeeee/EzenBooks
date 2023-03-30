import '../../css/bootstrap.min.css';
import '../../css/style.css';
import '../../css/header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
  faScrewdriverWrench,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import Categories from '../../pages/Categories';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { baseUrl } from '../commonApi/mainApi';
const menu = 'category';
const Header = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState('');
  const username = localStorage.getItem('username');
  const currentUrl = window.location.href;

  //로그인 사용자 정보 가져오기
  const getUser = useCallback(async () => {
    try {
      const response = await axios.get(baseUrl + '/user/' + username);
      setUser(response.data);
      localStorage.setItem('nickname', response.data.user_nickname);
      localStorage.setItem('role', response.data.user_role);
    } catch (error) {
      console.log(error);
    }
  }, [username]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  /* 검색하기 */
  const onSubmitSearch = async () => {
    if (search === '') searchBlank();
    else {
      window.location.href = 'search?keyword=' + search;
    }
  };

  /* 엔터키 입력으로 검색하기 */
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmitSearch();
    }
  };
  /* 검색어가 공백일 때 */
  const searchBlank = (e) => {
    Swal.fire({ text: '검색어를 입력해주세요', width: 400 });
  };

  // 검색어가 복붙일 때
  // const handleInputChange = (e) => {
  //   setSearch(e.target.value);
  // };

  //로그인 여부 확인
  const handleUserClick = (e) => {
    if (localStorage.getItem('username') === null) {
      Swal.fire({ text: '로그인 후 이용해주세요', width: 400 });
      e.preventDefault();
    } else {
      window.location.href = '/mypage/' + username;
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xl-2 col-lg-2 mt-4 mb-4'>
          <div className='header__logo'>
            <a href='/'>
              <img src='../img/MainLogo.png' alt='MainLogo' />
            </a>
          </div>
        </div>
        <div className='container colums-row col-xl-8 col-lg-8'>
          <div className='row'>
            <nav className='header__menu' id='header_menu'>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li
                  className={currentUrl.includes('/category') ? 'active' : ''}
                >
                  <a href='/category'>Category</a>
                  <ul className='dropdown'>
                    <Categories name={menu} />
                  </ul>
                </li>
                <li
                  className={currentUrl.includes('/bestseller') ? 'active' : ''}
                >
                  <a href='/bestseller'>Bestseller</a>
                </li>
                <li
                  className={currentUrl.includes('/userpick') ? 'active' : ''}
                >
                  <a href='/userpick'>
                    UserPick
                    <FontAwesomeIcon icon={faBolt} size='sm' color='#301fbf' />
                    20
                  </a>
                </li>
                <li className={currentUrl.includes('/newest') ? 'active' : ''}>
                  <a href='/newest'>New</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='row'>
            <div className='search__right col-xl-9 col-lg-9'>
              <div className='input-group'>
                <div className='form-outline'>
                  <input
                    onChange={(e) => {
                      setSearch(e.target.value);
                      console.log(search);
                    }}
                    onKeyPress={onKeyPress}
                    type='text'
                    className='form-control'
                    id='main-search'
                    placeholer='검색어를 입력하세요'
                    autoFocus
                    value={search}
                  />
                  <label className='form-label' htmlFor='main-search'></label>
                </div>
                <button
                  type='button'
                  className='btn btn-header btn-search'
                  onClick={() => {
                    onSubmitSearch();
                  }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-2 col-lg-2 container colums-row login-container'>
          <div className='header__right'>
            <div className='header__right__auth'>
              {localStorage.getItem('username') !== null ? (
                <div>
                  <Link className='user-info' to='/logout'>
                    {localStorage.getItem('nickname') + ' 님 / LOGOUT'}
                  </Link>
                </div>
              ) : (
                <div className='login-div'>
                  <Link to='/login'>
                    <span>Login</span>
                  </Link>
                  <span>/</span>
                  <Link to='/register'>
                    <span>Register</span>
                  </Link>
                </div>
              )}
            </div>

            <div className='row'>
              <div className='header__right__widget container d-flex justify-content-end mt-3'>
                {/*  운영자 메뉴, 운영자만 접근 가능 */}
                {localStorage.getItem('role') === 'ROLE_ADMIN' ? (
                  <div className='fontawsome admin' id='fascrewdriverwrench'>
                    <a href='/admin'>
                      <FontAwesomeIcon icon={faScrewdriverWrench} size='3x' />
                    </a>
                  </div>
                ) : (
                  <></>
                )}

                <div className='fontawsome' id='fauser'>
                  <a onClick={handleUserClick}>
                    <FontAwesomeIcon icon={faUser} size='3x' />
                  </a>
                </div>
                <div className='fontawsome' id='facartshopping'>
                  <a href='/cart'>
                    <FontAwesomeIcon icon={faCartShopping} size='3x' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
