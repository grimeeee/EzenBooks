import React from 'react';
import '../css/carouselSmall.css';
import '../css/swiper.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../components/commonApi/mainApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import CategoryName from '../components/Shared/CategoryName';

const NewestSmall = () => {
  const [book, setbook] = useState([]);
  const addr = baseUrl + '/newestsmall';

  useEffect(() => {
    getbook();
  }, []);

  async function getbook() {
    await axios
      .get(addr)
      .then((response) => {
        setbook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='neweast container col-xl-6 col-lg-6'>
      <div className='carousel container-fluid mt-4'>
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={2}
        >
          {book.map((item, index) => {
            return (
              // <div className='carousel-item container d-flex' >
              <SwiperSlide key={index}>
                <div className='carousel-items'>
                  <a href={'/book/' + item.book_num} id='carousel-img'>
                    <img src={item.book_image} alt={item.book_title} />
                  </a>
                </div>
                <div className='carousel-book-info'>
                  <p className='mt-4' id='book-title'>
                    {item.book_title}
                  </p>
                  <p className='mt-2' id='book-author'>
                    <CategoryName categoryCode={item.category_code} />
                    &nbsp;&nbsp;//&nbsp;&nbsp;{item.book_author}
                  </p>
                </div>
              </SwiperSlide>
              // </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default NewestSmall;
