import '../../css/review.css';
import { Rating } from '@mui/material';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews, deleteReview }) => {
  const [score, setScore] = useState([false, false, false, false, false]);
  const ARRAY = [0, 1, 2, 3, 4];

  useEffect(() => {
    starScore(reviews.review_rating);
  }, []);

  const starScore = (index) => {
    let star = [...score];
    for (let i = 0; i < index; i++) {
      star[i] = i <= index ? true : false;
    }
    setScore(star);
  };
  return (
    <div className='review-wrap container-fluid colums-row'>
      <div className='review-body container-fluid d-flex'>
        <Stars>
          {ARRAY.map((el, index) => (
            <FaStar
              key={index}
              size='14'
              className={score[el] && 'yellowStar'}
            ></FaStar>
          ))}{' '}
          {reviews.review_rating}.0
        </Stars>
        <div className='review-writer col-2 columns-row'>
          {/* <div>{reviews.review_num}</div> */}
          {/* <div>{reviews.user_id}</div> */}
          <div>{reviews.review_writer}</div>
          <div className='review-rating'>
            {/* <Rating
              readOnly
              name='read-only'
              value={reviews.review_rating}
              icon={<FontAwesomeIcon icon={faStar} color='#966FD6' />}
              emptyIcon={<FontAwesomeIcon icon={faStar} color='#FFFFFF' />}
            /> */}
          </div>
          <div>{reviews.review_reporting_date}</div>
        </div>

        <div className='review-content mt-2 col-9'>
          <div>{reviews.review_content}</div>
        </div>
        <div className='review-edit columns-row col-1'>
          <Link
            to={`/review/${reviews.review_num}`}
            state={{
              num: reviews.review_num,
              id: reviews.user_id,
              book_num: reviews.book_num,
              content: reviews.review_content,
              rating: reviews.review_rating,
              writer: reviews.review_writer,
            }}
          >
            <button className='btn btn-search review-edit-btn'>수정</button>
          </Link>
          <button
            className='btn btn-search review-delete-btn'
            onClick={() => deleteReview(reviews.review_num)}
          >
            삭제
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ReviewList;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
