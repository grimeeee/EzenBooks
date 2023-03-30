import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/curation.css';
import React from 'react';
import Carousel from 'better-react-carousel';

const NewestPage = () => {
  return (
    <div className='bestseller container col-xl-6 col-lg-6'>
      <div className='curation container-fluid mt-4'>
        <Carousel cols={2} rows={1} gap={15} loop>
          <Carousel.Item>
            <div id='book-image'>
              <a href='#'>
                <img src='./test/test1.jpg' />
              </a>
            </div>
            <div  className='carousel-item-detail'>
              <p id='book-ranking'>#1</p>
              <p id='book-title'>세이노의 가르침</p>
              <p id='book-category'>자기계발</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div id='book-image'>
              <a href='#'>
                <img src='./test/test2.jpg' />
              </a>
            </div>
            <div  className='carousel-item-detail'>
              <p id='book-ranking'>#2</p>
              <p id='book-title'>만일 내가 인생을 다시 산다면</p>
              <p id='book-category'>인문</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id='book-image'>
              <a href='#'>
                <img src='./test/test3.jpg' />
              </a>
            </div>
            <div  className='carousel-item-detail'>
              <p id='book-ranking'>#3</p>
              <p id='book-title'>원씽(The One Thing)</p>
              <p id='book-category'>자기계발</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id='book-image'>
              <a href='#'>
                <img src='./test/test4.jpg' />
              </a>
            </div>
            <div>
              <p id='book-ranking'>#4</p>
              <p id='book-title'>김미경의 마흔 수업</p>
              <p id='book-category'>자기계발</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div id='book-image'>
              <a href='#'>
                <img src='./test/test5.jpg' />
              </a>
            </div>
            <div>
              <p id='book-ranking'>#5</p>
              <p id='book-title'>역행자</p>
              <p id='book-category'>자기계발</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div id='book-image'>
              <a href='#'>
                <img src='./test/test6.jpg' />
              </a>
            </div>
            <div>
              <p id='book-ranking'>#6</p>
              <p id='book-title'>불편한 편의점</p>
              <p id='book-category'>소설</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div id='book-image'>
              <a href='#'>
                <img src='./test/test7.jpg' />
              </a>
            </div>
            <div>
              <p id='book-ranking'>#7</p>
              <p id='book-title'>우리는 모두 죽는다는 것을 기억하라</p>
              <p id='book-category'>자기계발</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div id='book-image'>
              <a href='#'>
                <img src='./test/test8.jpg' />
              </a>
            </div>
            <div>
              <p id='book-ranking'>#8</p>
              <p id='book-title'>
                해커스 토익 기출보카 TOEIC VOCA(토익보카) 단어장
              </p>
              <p id='book-category'>국어/외국어</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id='book-image'>
              <a href='#'>
                <img src='./test/test9.jpg' />
              </a>
            </div>
            <div>
              <p id='book-ranking'>#9</p>
              <p id='book-title'>공생의 기술</p>
              <p id='book-category'>사회/정치</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id='book-image'>
              <a href='#'>
                <img src='./test/test10.jpg' />
              </a>
            </div>
            <div>
              <p id='book-ranking'>#10</p>
              <p id='book-title'>자소서 바이블 2.0</p>
              <p id='book-category'>자기계발</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default NewestPage;
