import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/mainmenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-admin";

const MainMenu = () => {
  return (
    <div className='main-menu'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-2 col-lg-2 mt-4 mb-4'>
            <div className='header__logo'>
              <a href='/'>
                <img src='../img/MainLogo.png' alt='Main Logos' />
              </a>
            </div>
          </div>
          <div className='container colums-row col-xl-8 col-lg-8'>
            <div className='row'>
              <nav className='header__menu'>
                <ul>
                  <li className='active'>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='/category'>카테고리</a>
                    <ul className='dropdown'>
                      <li>
                        <a href='/category'>전체</a>
                      </li>
                      <li>
                        <a href='/category/2'>소설</a>
                      </li>
                      <li>
                        <a href='/category/3'>시/에세이</a>
                      </li>
                      <li>
                        <a href='/category/4'>경제/경영</a>
                      </li>
                      <li>
                        <a href='/category/5'>자기계발</a>
                      </li>
                      <li>
                        <a href='/category/6'>인문</a>
                      </li>
                      <li>
                        <a href='/category/7'>역사/문화</a>
                      </li>
                      <li>
                        <a href='/category/8'>사회</a>
                      </li>
                      <li>
                        <a href='/category/9'>과학</a>
                      </li>
                      <li>
                        <a href='/category/10'>예술/종교</a>
                      </li>
                      <li>
                        <a href='/category/11'>어린이/청소년</a>
                      </li>
                      <li>
                        <a href='/category/12'>생활</a>
                      </li>
                      <li>
                        <a href='/category/13'>취미</a>
                      </li>
                      <li>
                        <a href='/category/14'>어학</a>
                      </li>
                      <li>
                        <a href='/category/15'>IT</a>
                      </li>
                      <li>
                        <a href='/category/16'>학습</a>
                      </li>
                      <li>
                        <a href='/category/17'>해외도서</a>
                      </li>
                      <li>
                        <a href='/category/18'>라이트노벨</a>
                      </li>
                      <li>
                        <a href='/category/20'>기타</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='/bestseller'>베스트셀러</a>
                  </li>
                  <li>
                    <a href='/ranking20'>랭킹#20</a>
                  </li>
                  <li>
                    <a href='/newest'>신간</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='row'>
              <div className='search__right col-xl-9 col-lg-7'>
                <div className='input-group'>
                  <div className='form-outline'>
                    <input
                      type='text'
                      id='main-search'
                      className='form-control'
                      value='search'
                      onChange='onChangeSearch'
                    />
                    <label className='form-label' htmlFor='main-search'></label>
                  </div>
                  <button type='button' className='btn btn-search'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-2 col-lg-2 container colums-row'>
            <div className='header__right'>
              <div className='header__right__auth mt-2'>
                {localStorage.getItem("username") !== null ? (
                  <div>
                    <Link className='nav-link' to='/logout'>
                      {localStorage.getItem("username") + " LOGOUT"}
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to='/loginPage'>
                      <span>Login</span>
                    </Link>
                    &nbsp;
                    <Link to='registerPage'>
                      <span>Register</span>
                    </Link>
                  </div>
                )}
              </div>

              <div className='row'>
                <div className='header__right__widget container d-flex justify-content-end mt-4'>
                  {/*  운영자 메뉴, 운영자만 접근 가능 */}
                  <div className='fontawsome' id='fascrewdriverwrench'>
                    <a href='/admin'>
                      <FontAwesomeIcon icon={faScrewdriverWrench} size='3x' />
                    </a>
                  </div>

                  <div className='fontawsome' id='fauser'>
                    <a href='/mypage'>
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
    </div>
  );
};

export default MainMenu;
