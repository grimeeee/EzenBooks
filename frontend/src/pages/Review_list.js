import '../css/review.css';
import { Rating } from '@mui/material';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewList = ({ reviews }) => {
  return (
    <div className='review-wrap container-fluid colums-row'>
      <div className='review-body container-fluid d-flex'>
        <div className='review-writer col-2 columns-row'>
          {/* <div>{reviews.review_num}</div> */}
          {/* <div>{reviews.user_id}</div> */}
          <div>{reviews.review_writer}</div>
          <div className='review-rating'>
            <Rating
              readOnly
              name='read-only'
              value={reviews.review_rating}
              icon={<FontAwesomeIcon icon={faStar} color='#966FD6' />}
              emptyIcon={<FontAwesomeIcon icon={faStar} color='#FFFFFF' />}
            />
          </div>
          <div>{reviews.review_reporting_date}</div>
        </div>

        <div className='review-content mt-2 col-9'>
          <div>{reviews.review_content}</div>
        </div>
        <div className='review-edit columns-row col-1'>
          <button className='btn btn-search review-edit-btn'>수정</button>
          <button className='btn btn-search review-delete-btn'>삭제</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ReviewList;
