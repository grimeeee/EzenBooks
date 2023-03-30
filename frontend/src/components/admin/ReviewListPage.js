import '../../css/bootstrap.min.css';
import '../../css/reviewlist.css';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../commonApi/mainApi';
import Pagination from '../Shared/Pagination';
import { Table } from 'react-bootstrap';

const ReviewListPage = () => {
  const [review, setReview] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    getReview();
  }, []);

  //리뷰 가져오기
  async function getReview() {
    await axios
      .get(baseUrl + '/reviewlist')
      .then((response) => {
        setReview(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //정렬하기
  function sortTable(column) {
    const sortedReview = [...review].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setReview(sortedReview);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }

  return (
    <div className='reviewPage-Wrap container-fluid col-xl-12 col-lg-12'>
      <div className='reviewlist-topmenu d-flex justify-content-between'>
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
      </div>

      <div className='row'>
        <div className='card'>
          <table className='table mb-0' id='booklist-title'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='review_num'
                  onClick={() => sortTable('review_num')}
                >
                  리뷰번호
                </th>
                <th
                  scope='col'
                  className='book_num'
                  onClick={() => sortTable('book_num')}
                >
                  상품번호
                </th>
                <th
                  scope='col'
                  className='user_id'
                  onClick={() => sortTable('user_id')}
                >
                  User ID
                </th>
                <th
                  scope='col'
                  className='review_writer'
                  onClick={() => sortTable('review_writer')}
                >
                  닉네임
                </th>
                <th
                  scope='col'
                  className='review_reporting_date'
                  onClick={() => sortTable('review_reporting_date')}
                >
                  작성일
                </th>
                <th scope='col' className='review_rating'>
                  평점
                </th>
                <th
                  scope='col'
                  className='review_rating'
                  onClick={() => sortTable('review_rating')}
                >
                  삭제
                </th>
              </tr>
            </thead>
          </table>

          {review.slice(offset, offset + limit).map((review) => {
            return (
              <div key={review.review_num}>
                <Table className='review_data'>
                  <tbody>
                    <tr>
                      <th scope='col' className='review_num'>
                        {review.review_num}
                      </th>
                      <td className='book_num'>{review.book_num}</td>
                      <td className='user_id'>{review.user_id}</td>
                      <td className='review_writer'>{review.review_writer}</td>
                      <td scope='col' className='review_reporting_date'>
                        {review.review_reporting_date}
                      </td>
                      <td className='review_rating'>{review.review_rating}</td>
                      <td className='review_delete'>삭제</td>
                    </tr>
                    <tr>
                      <td className='review_content' colSpan='7'>
                        {review.review_content}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            );
          })}
          <footer>
            <Pagination
              total={review.length}
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
export default ReviewListPage;
