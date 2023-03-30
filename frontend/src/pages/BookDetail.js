import '../css/style.css';
import '../css/category.css';
import Categories from './Categories';
import BookDetailPage from './BookDetailPage';

const BookDetail = () => {
  return (
    <div className='container-fluid d-flex'>
      <div className='col-xl-2 col-lg-2'>
        <Categories />
      </div>
      <div className='col-xl-10 col-lg-10'>
        <BookDetailPage />
      </div>
    </div>
  );
};

export default BookDetail;
