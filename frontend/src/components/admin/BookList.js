import AdminMenu from './AdminMenu';
import BookListPage from './BookListPage';

const BookList = () => {
  return (
    <div className='container-fluid d-flex'>
      <div className='col-1'>
        <AdminMenu />
      </div>
      <div className='col-11 p-0'>
        <BookListPage />
      </div>
    </div>
  );
};

export default BookList;
