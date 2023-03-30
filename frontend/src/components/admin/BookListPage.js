import '../../css/bootstrap.min.css';
import '../../css/booklist.css';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../../components/commonApi/mainApi';
import Pagination from '../../components/Shared/Pagination';
import Table from 'react-bootstrap/Table';
import CategoryName from '../../components/Shared/CategoryName';

const BookListPage = () => {
  const [book, setBook] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    getbook();
  }, []);

  async function getbook() {
    await axios
      .get(baseUrl + '/booklist')
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //정렬하기
  function sortTable(column) {
    const sortedBook = [...book].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setBook(sortedBook);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
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
          <button className='btn-search' id='books-add'>
            추가
          </button>
        </div>
      </div>
      <div className='row'>
        <div className='card'>
          <table className='booklist-table mb-0' id='booklist-title'>
            <thead>
              {/* 테이블 헤드 */}
              <tr>
                {/* <th scope='col' className='book_num'>
                  book No.
                </th> */}

                <th
                  scope='col'
                  className='book_num'
                  id='th-book-num'
                  onClick={() => sortTable('book_num')}
                >
                  상품번호
                </th>
                <th
                  scope='col'
                  className='book_category'
                  onClick={() => sortTable('book_category')}
                >
                  카테고리
                </th>
                <th
                  scope='col'
                  className='book_title'
                  onClick={() => sortTable('book_title')}
                >
                  제목
                </th>
                <th
                  scope='col'
                  className='book_author'
                  onClick={() => sortTable('book_author')}
                >
                  저자
                </th>
                <th
                  scope='col'
                  className='book_publisher'
                  onClick={() => sortTable('book_publisher')}
                >
                  출판사
                </th>
                <th scope='col' className='book_image'>
                  표지
                </th>
                <th
                  scope='col'
                  className='book_price'
                  onClick={() => sortTable('book_price')}
                >
                  가격
                </th>
                <th
                  scope='col'
                  className='book_pubdate'
                  onClick={() => sortTable('book_pubdate')}
                >
                  출판일
                </th>
                <th
                  scope='col'
                  className='book_isbn'
                  onClick={() => sortTable('book_isbn')}
                >
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
                        {book.book_num}
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
