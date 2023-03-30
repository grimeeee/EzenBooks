import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../components/commonApi/mainApi';
import Pagination from '../components/Shared/Pagination';
import Table from 'react-bootstrap/Table';
import '../css/bootstrap.min.css';
import '../css/booklist.css';
import CategoryName from '../components/Shared/CategoryName';
import Modal from './Modal.js';
import '../css/Modal.css';

const BookListPage = (props) => {
  const [book, setbook] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [content, setContent] = useState();

const handleClickButton = e => {
    const { name } = e.target;
    setContent(name);
};

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  const [bookitem, setbookitem] = useState({
    category_code:'',
    book_title:'',
    book_author:'',
    book_image:'',
    book_price:'',
    book_publisher:'',
    book_pubdate:'',
    book_isbn:'',
    book_desc:'',
  });

  const{category_code, book_title, book_author,book_image
    ,book_price,book_publisher,book_pubdate,book_isbn,book_desc} = bookitem;



  const onSubmit = async(e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('category_code', category_code);
  formData.append('book_title', book_title);
  formData.append('book_author', book_author);
  formData.append('book_image', book_image);
  formData.append('book_price', book_price);
  formData.append('book_publisher', book_publisher);
  formData.append('book_pubdate', book_pubdate);
  formData.append('book_isbn', book_isbn);
  formData.append('book_desc', book_desc);


  const config = {
    headers:{'Content-Type' : 'multipart/form-data'},
  };

  await axios
  .post(
    `${baseUrl}/booklist/write`, formData, config)
  .then(()=>{
    setbookitem({
      category_code:'',
      book_title:'',
      book_author:'',
      book_image:'',
      book_price:'',
      book_publisher:'',
      book_pubdate:'',
      book_isbn:'',
      book_desc:'',
    });
    alert("책 정보가 등록되었습니다.")
    window.location.replace("/admin/booklist")
  }).catch((err)=> {
    console.error(err.message);
  });
  };

  //이름 값들을 nextState에다가 저장
  const handleValueChange = (e) => {
    let nextState = {}
    nextState[e.target.name] = e.target.value;
    setbookitem({...bookitem, ...nextState});
    };
    

  useEffect(() => {
    getbook();
  }, []);

  async function getbook() {
    await axios
      .get(baseUrl + '/booklist')
      .then((response) => {
        setbook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='bookPage-Wrap container-fluid col-xl-12 col-lg-12'>
      <div className='booklist-topmenu d-flex justify-content-between'>
        <div className='set_pages'>
          <label>
            페이지 당 표시할 게시물 수&nbsp;&nbsp;:&nbsp;&nbsp;
            <select
              type='number'
              value={limit}
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </select>
          </label>
        </div>
        <div className='booklist-topmenu-modify'>
    <React.Fragment>
      <button onClick={openModal} className='btn-search' id='books-add'>추가</button>
      <Modal open={modalOpen} close={closeModal} header="상품등록">
        <main>
        <form onSubmit={onSubmit} action="/booklist/write" method='post'>
      <table>
          <tbody>
            <tr className='form-input'>
              <td width='20%' align='center'>카테고리</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='category_code'
                  size='2'
                  maxLength='4'
                  value={category_code}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>제목</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_title'
                  size='10'
                  maxLength='10'
                  value={book_title}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>저자</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_author'
                  size='10'
                  value={book_author}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>출판사</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_publisher'
                  size='20'
                  maxLength='10'
                  value={book_publisher}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>표지</td>
              <td>
                <input
                  className='form-input basic' 
                  type='text'
                  name='book_image'
                  size='20'
                  value={book_image}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>가격</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_price'
                  size='10'
                  maxLength='10'
                  value={book_price}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>출판일 </td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_pubdate'
                  size='10'
                  maxLength='10'
                  value={book_pubdate}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>ISBN</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_isbn'
                  size='10'
                  maxLength='10'
                  value={book_isbn}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>DESC</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_desc'
                  size= 'auto'
                  value={book_desc}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button onClick={onSubmit} className='btn btn-primary' value='등록하기'>등록하기
        </button>
        </form>
        </main>
      </Modal>
    </React.Fragment>  

        </div>
      </div>
      <div className='row'>
        <div className='card'>
          <table className='table mb-0' id='booklist-title'>
            <thead>
              {/* 테이블 헤드 */}
              <tr>
                {/* <th scope='col' className='book_num'>
                  book No.
                </th> */}

                <th scope='col' className='book_num'>
                  상품번호
                </th>
                <th scope='col' className='book_category'>
                  카테고리
                </th>
                <th scope='col' className='book_title'>
                  제목
                </th>
                <th scope='col' className='book_author'>
                  저자
                </th>
                <th scope='col' className='book_publisher'>
                  출판사
                </th>
                <th scope='col' className='book_image'>
                  표지
                </th>
                <th scope='col' className='book_price'>
                  가격
                </th>
                <th scope='col' className='book_pubdate'>
                  출판일
                </th>
                <th scope='col' className='book_isbn'>
                  ISBN
                </th>
              </tr>
            </thead>
          </table>
          {book.slice(offset, offset + limit).map((book) => {
            return (
              <div key={book.book_num}>
                <Table className='book_data'>
                  <tbody>
                    <tr>
                      <th scope='row' className='book_num'>
                      <a href={'/admin/booklist/' + `${book.book_num}`}>
                        {book.book_num}
                        </a>
                      </th>
                      <td className='book_category'>
                        <p id='book-detail-category'>
                          <CategoryName categoryCode={book.category_code} />
                        </p>
                      </td>
                      <td className='book_title'>{book.book_title}</td>
                      <td className='book_author'>{book.book_author}</td>
                      <td className='book_publisher'>{book.book_publisher}</td>
                      <td className='book_image'>
                        <img src={book.book_image} />
                      </td>
                      <td className='book_price'>{book.book_price}</td>
                      <td className='book_pubdate'>{book.book_pubdate}</td>
                      <td className='book_isbn'>{book.book_isbn}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            );
          })}

          <footer>
            <Pagination
              total={book.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </footer>
        </div>
      </div>
    </div>
  );
};
export default BookListPage;
