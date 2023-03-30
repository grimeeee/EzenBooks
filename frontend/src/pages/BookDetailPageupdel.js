import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/bookdetail.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../components/commonApi/mainApi';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import CategoryName from '../components/Shared/CategoryName';
import { Button } from 'react-bootstrap';
// import { Rating } from '@mui/material';

const BookDetailPageupdel = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const { addItem } = useCart();

  // 금액 천단위로 나누기
  const bPrice = (book.book_price * 1).toLocaleString('ko-KR');
  const bDiscountedPrice = (book.book_price * 0.9).toLocaleString('ko-KR');

  useEffect(() => {
    getBook();
  }, []);

  localStorage.setItem('saw', JSON.stringify(book));

  const getBook = async () => {
    await axios.get(baseUrl + '/booklist').then((response) => {
      setBook(response.data.find((book) => book.book_num === parseInt(id)));
    });
  };

  // 날짜형식 "YYYYMMDD" 에서 문자열 형식으로 변환
  function formatDate(dateString) {
    const year = dateString.substr(0, 4);
    const month = dateString.substr(4, 2);
    const day = dateString.substr(6, 2);
    return year + '년 ' + month + '월 ' + day + '일';
  }

  

  

  const delbook = async(e) => {
    
    e.preventDefault();
    
    await axios
    .delete(`${baseUrl}/booklist/delete/${book.book_num}`)
    .then(()=> {
      
      alert(`${book.book_title}` +" 정보가 삭제되었습니다.")
      window.location.replace("/admin/booklist/")
    })
    .catch((err)=> console.error(err.message));
  };




  return (
    <>
    <div className="book-detail-wrap container-fluid">
      <div className="book-detail-body colums-row">
        <div className="book-title-name">
          <p>{book.book_title}</p>

         <center> <Button href={'/admin/booklist/update/' + `${book.book_num}`}>수정</Button><Button onClick={delbook}>삭제</Button> </center>
          
          <hr />
        </div>
        <div className="book-detail d-flex mt-4">
          <div className="book-detail-img col-4">
            <img src={book.book_image} alt="book" />
          </div>
          <div className="book-detail-right col-8 colum-row">
            <div className="row">
              <div className="book-detail-info colums-row col-8">
                <div className="container d-flex justify-content-between p-0 ">
                  <div className="book-author col-8">
                    <p>{book.book_author}</p>
                  </div>
                 
                </div>
                <div className="container d-flex justify-content-between p-0 ">
                  <div className="book-publisher">
                    <p id="book-detail-category">
                      <CategoryName categoryCode={book.category_code} />
                    </p>
                    <p>{book.book_publisher}</p>
                  </div>
                </div>
                <p id="book-publishing-date">
                  발간일: &nbsp;
                  {book.book_pubdate && formatDate(book.book_pubdate)}
                </p>
              </div>

              <div className="col-4">
                <div
                  className="cart-sum card conainer colums-row  mt-1"
                  id="cart-sum"
                >
                  <div className="cart-sum-wrap">
                    <div
                      className="
                order-info"
                    >
                      <div className="cart-sum-price d-flex">
                        <p className="title">상품금액 : </p>
                        <p className="price">{bDiscountedPrice} 원</p>
                      </div>
                      <div className="cart-sum-shipping d-flex">
                        <p className="title">배 송 비 : </p>
                        <p className="price"> 0 원 </p>
                      </div>
                      <hr />
                      <div className="cart-total-price d-flex">
                        <p className="title">결제금액 : </p>
                        <p className="price">{bDiscountedPrice} 원 </p>
                      </div>
                      <div className="cart-order">
                        <div className="book-cart-body d-flex justify-content-between">
                         
                          
                         
                        </div>
                        {/* <button className='btn btn-search btn-cart-order'>
                            주문하기
                          </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-content card">
              <p div className="book-content-description">
                책 소개
              </p>
              <div className="book-description">{book.book_desc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default BookDetailPageupdel;
