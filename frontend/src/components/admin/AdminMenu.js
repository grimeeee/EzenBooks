import '../../css/style.css';
import '../../css/userlist.css';
import React from 'react';

const AdminMenu = () => {
  return (
    <div className='adminpage-wrap container-fluid d-flex mt-3'>
      <div className='adminpage-menu column-row'>
        <ul>
          <a href='/admin/user'>
            <li>회원 관리</li>
          </a>
          <a href='/admin/book'>
            <li>상품 관리</li>
          </a>
          <a href='/admin/review'>
            <li>리뷰 관리</li>
          </a>
          <a href='/admin/sales'>
            <li>매출 관리</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
