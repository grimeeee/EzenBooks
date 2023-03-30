import React from 'react';
import MultiListTemplate from '../components/Shared/MultiListTemplate';
import Categories from '../pages/Categories';

const CategoryMulti = (props) => {
  const menu = props.menu;
  const id = props.id;
  // console.log('CategoryMulti Loaded : ' + `${menu}` + '/' + `${props.id}`);

  return (
    <div className='container-fluid d-flex'>
      <div className='col-xl-2 col-lg-2 mt-2'>
        <Categories name={menu} />
      </div>
      <div className='categoryRight col-xl-10 col-lg-10 container-fluid mt-3'>
        <MultiListTemplate menu={menu} id={id} />
      </div>
    </div>
  );
};
export default CategoryMulti;
