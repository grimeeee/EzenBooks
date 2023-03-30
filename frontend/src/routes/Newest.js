import React from 'react';
import MainListTemplate from '../components/Shared/MainListTemplate';
import Categories from '../pages/Categories';

const Newest = (props) => {
  const menu = props.menu;

  return (
    <div className='container-fluid d-flex'>
      <div className='col-xl-2 col-lg-2 mt-2'>
        <Categories name={menu} />
      </div>
      <div className='categoryRight col-xl-10 col-lg-10 container-fluid mt-3'>
        <MainListTemplate menu={menu} />
      </div>
    </div>
  );
};

export default Newest;
