import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/carousel.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../components/commonApi/mainApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const CarouselPage = () => {
  const [curation, setCuration] = useState([]);
  const userName = localStorage.getItem('username');
  const prevBook = localStorage.getItem('saw');
  const prevBookJSON = JSON.parse(prevBook);

  async function getCuration() {
    await axios
      .get(baseUrl + '/index/curation', {
        params: {
          user_name: userName,
          bought: prevBook == null ? 1 : prevBookJSON.book_num
        },
      })
      .then((response) => {
        setCuration(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getCuration();
  }, []);

  const getCarouselTitle = () => {
    if (userName) {
      return (
        <span>{localStorage.getItem('nickname')}고객님을 위한 추천 도서</span>
      );
    } else {
      return <span>고객님을 위한 추천 도서</span>;
    }
  };

  return (
    <div className='carousel container-fluid mt-1'>
      <p id='Carousel-title'>{getCarouselTitle()}</p>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={4}
      >
        {curation.map((item, index) => {
          return (
            <SwiperSlide key={item.book_num}>
              <div id='book-image'>
                <a href={'/book/' + item.book_num}>
                  <img src={item.book_image} alt={item.book_title} />
                </a>
              </div>
              <div className='carousel-item-detail'>
                <p id='book-ranking'>#{index + 1}</p>
                <p id='book-title'>{item.book_title}</p>
                <p id='book-category'>{item.category_name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CarouselPage;
