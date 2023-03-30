import React from 'react';
import { useParams } from 'react-router-dom';
import AdminMenu from '../components/admin/AdminMenu';
import BookListPage from '../components/admin/BookListPage';
import ReviewListPage from '../components/admin/ReviewListPage';
import SalesListPage from '../components/admin/SalesListPage';
import UserListPage from '../components/admin/UserListPage';

const Admin = () => {
  const { category } = useParams();

  const getCategory = () => {
    switch (category) {
      case 'user':
        return <UserListPage />;
      case 'book':
        return <BookListPage />;
      case 'review':
        return <ReviewListPage />;
      case 'sales':
        return <SalesListPage />;

      default:
        return <UserListPage />;
    }
  };

  return (
    <div className='container-fluid d-flex'>
      <div className='col-1'>
        <AdminMenu />
      </div>
      <div className='col-11'>{getCategory()}</div>
    </div>
  );
};

export default Admin;
