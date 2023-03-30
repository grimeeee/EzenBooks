import AdminMenu from '../components/admin/AdminMenu';
import UserListPage from '../components/admin/UserListPage';

const UserList = () => {
  return (
    <div className='container-fluid d-flex'>
      <div className='col-1'>
        <AdminMenu />
      </div>
      <div className='col-11 p-0'>
        <UserListPage />
      </div>
    </div>
  );
};

export default UserList;
