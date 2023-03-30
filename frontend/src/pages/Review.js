import '../css/bootstrap.min.css';
import '../css/review.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../components/commonApi/mainApi';
import ReviewList from './Review_list';
import { MDBBtn, MDBCollapse } from 'mdb-react-ui-kit';

const Review = (props) => {
  const id = props.id;
  const book_num = parseInt(id);
  const [review, setReview] = useState([]);
  const [inputs, setInputs] = useState('');
  const [foldShow, setFoldShow] = useState(false);
  const toggleShow = () => setFoldShow(!foldShow);

  useEffect(() => {
    getReview(book_num);
  }, []);

  async function getReview(book_num) {
    await axios
      .get(baseUrl + '/review/' + book_num)
      .then((response) => {
        setReview(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const insertReview = async (e) => {
    e.preventDefault();
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const form = new FormData();

    form.append('user_id', 11);
    form.append('book_num', id);
    form.append('review_content', inputs);
    form.append('review_rating', 5);
    form.append('review_writer', 'userNick11');

    await axios
      .post(baseUrl + '/review', form, config)
      .then((response) => {
        console.log('post: ' + response.data);
        getReview(book_num);
        setInputs('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    let nextState = [];
    nextState[e.target.name] = e.target.value;
    console.log(nextState[e.target.name]);
    setInputs(nextState[e.target.name]);
  };
  return (
    <div className='review-body colmuns-row mt-2'>
      <div className='review-list-title d-flex justify-content-between'>
        <p className='review-view-title'>Review</p>
        <p className='review-write'>
          <MDBBtn
            onClick={toggleShow}
            className='review-write-btn btn btn-search'
            id='btn-review-right'
          >
            작성
          </MDBBtn>
        </p>
      </div>
      <div className='review-write-form'>
        <MDBCollapse show={foldShow}>
          <div className='container-fluid d-flex form-box'>
            <div className='write-form-wrap col-11' id='bb'>
              <form className='write-form'>
                <textarea onChange={handleValueChange}></textarea>
              </form>
            </div>
            <div className='col-1' id='cc'>
              <input
                type='button'
                className='btn btn-search review-add'
                value='등록'
                onClick={insertReview}
              />
            </div>
          </div>
        </MDBCollapse>
      </div>
      <hr />

      <div className='container-fluid columns-row'>
        {review &&
          review.map((reviews) => {
            return <ReviewList key={reviews.review_num} reviews={reviews} />;
          })}
      </div>
    </div>
  );
};

export default Review;
