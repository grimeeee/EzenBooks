import React from 'react';
import '../css/bootstrap.min.css';
import '../css/category.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../components/commonApi/mainApi';

const Categories = (props) => {
  const [category, setCategory] = useState([]);
  const url = 'http://localhost:3000/';

  useEffect(() => {
    getCategory();
  }, []);

  async function getCategory() {
    await axios
      .get(`${baseUrl}/categorydata`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ul className='dropdown-wrap'>
      <li className='categorylist_li'>
        <a href={`${url}${props.name}`}>전체</a>
      </li>
      {category.map((category) => {
        return (
          <li
            className='categorylist_li'
            key={category.category_code}
            id={`${props.name}` + '_' + `${category.category_code}`}
          >
            <a href={`${url}${props.name}` + '/' + `${category.category_code}`}>
              {category.category_name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
