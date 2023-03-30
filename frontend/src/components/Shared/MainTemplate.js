import React from 'react';
import { useParams } from 'react-router-dom';
import Bestseller from '../../routes/Bestseller';
import Category from '../../routes/Category';
import Newest from '../../routes/Newest';
import Admin from '../../routes/Admin';
import DefaultPage from '../../pages/DefaultPage';

const MainTemplate = () => {
  const { menu } = useParams();

  const getContainer = (menu) => {
    switch (menu) {
      case 'category':
        return <Category menu={menu} />;
      case 'newest':
        return <Newest menu={menu} />;
      case 'bestseller':
        return <Bestseller menu={menu} />;
      case 'admin':
        return <Admin />;
      default:
        return <DefaultPage />;
    }
  };
  return <>{getContainer(menu)}</>;
};

export default MainTemplate;
