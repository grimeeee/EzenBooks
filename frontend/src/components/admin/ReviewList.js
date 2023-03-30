import AdminMenu from './AdminMenu';
import ReviewListPage from './ReviewListPage';

const UserList = () => {
  return (
    <div className='container-fluid d-flex'>
      <div className='col-1'>
        <AdminMenu />
      </div>
      <div className='col-11 p-0'>
        <ReviewListPage />
      </div>
    </div>
  );
};

export default UserList;
