import BestsellerSmall from '../../pages/BestsellerSmall';
import CarouselPage from '../../pages/Carousel';
import NewestSmall from '../../pages/NewestSmall';

const Home = () => {
  return (
    <>
      <CarouselPage />
      <div className='container-fulid d-flex col-xl-12 col-lg-12 mt-3'>
        <div className='col-xl-6 col-lg-6 my-3' id='bestseller-body'>
          <h4>베스트셀러</h4>
          <div className='card mt-3'>
            <BestsellerSmall />{' '}
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 my-3' id='newest-body'>
          <h4>오늘의 신간</h4>
          <div className='card mt-3'>
            <NewestSmall />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
