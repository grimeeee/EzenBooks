import React from 'react';
import { useParams } from 'react-router-dom';
import Admin from '../../routes/Admin';
import DefaultPage from '../../pages/DefaultPage';
import NewestMulti from '../../routes/NewestMulti';
import BestsellerMulti from '../../routes/BestsellerMulti';
import CategoryMulti from '../../routes/CategoryMulti';

const MultiTemplate = () => {
  const { menu, id } = useParams();

  const getContainer = (menu) => {
    switch (menu) {
      case 'category':
        return <CategoryMulti menu={menu} id={id} />;
      case 'newest':
        return <NewestMulti menu={menu} id={id} />;
      case 'bestseller':
        return <BestsellerMulti menu={menu} id={id} />;
      case 'admin':
        return <Admin />;
      default:
        return <DefaultPage />;
    }
  };
  return <>{getContainer(menu)}</>;
};

export default MultiTemplate;
