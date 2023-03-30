import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../components/commonApi/mainApi';
import Pagination from '../components/Shared/Pagination';
import '../css/userlist.css';
import '../css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Collapse from 'react-bootstrap/Collapse';
import Modal from './Modal.js';

const UserListPage = () => {
  const [user, setUser] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [open, setOpen] = useState(false);
  


  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    await axios
      .get(baseUrl + '/userlist')
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

    

  return (

    <div className='UserPage-Wrap container-fluid col-xl-12 col-lg-12'>
      <div className='set_pages'>
        <label>
          페이지 당 표시할 게시물 수&nbsp;&nbsp;:&nbsp;&nbsp;
          <select
            type='number'
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
          </select>
        </label>
      </div>
      <div className='row'>
        <div className='card'>
          <table className='table mb-0' id='user-title'>
            <thead>
              {/* 테이블 헤드 */}
              <tr>
                <th scope='col' className='user_id'>
                  ID
                </th>
                <th scope='col' className='user_name'>
                  Name
                </th>
                <th scope='col' className='user_email'>
                  Email
                </th>
                <th scope='col' className='user_nickname'>
                  Nickname
                </th>
                <th scope='col' className='user_role'>
                  Level
                </th>
                <th scope='col' className='create_date'>
                  가입일
                </th>
                <th scope='col' className='modify_date'>
                  수정일
                </th>
                <th scope='col' className='user-modify'>
                  Modify
                </th>
                <th scope='col' className='user-delete'>
                  Delete
                </th>
              </tr>
            </thead>
          </table>
          {user.slice(offset, offset + limit).map((user) => {

            const handleDelete = async(e) => {
              e.preventDefault();
              await axios
              .delete(`${baseUrl}/userlist/delete/${user.user_id}`)
              .then(()=> {
                alert(`${user.user_name}` +"님의 회원정보가 삭제되었습니다.")
                window.location.replace("/admin/userlist")
              })
              .catch((err)=> console.error(err.message));
            };

            

            return (
              <div key={user.user_id}>
                  
                <Table>
                  <tbody>
                    <tr id={'row' + user.user_id}>
                      <td className='user_id' id='uid'>
                        {user.user_id}
                      </td>
                     
                      <td className='user_name'>{user.user_name}</td>
                      <td className='user_email'>{user.user_email}</td>
                      <td className='user_nickname'>{user.user_nickname}</td>
                      <td className='user_role'>{user.user_role}</td>
                      <td className='create_date'>{user.create_date}</td>
                      <td className='modify_date'>{user.modify_date}</td>
                      <td className='user_modify'><a href={'/admin/userlist/update/' + `${user.user_id}`}>수정</a></td>
                      <td className='user_delete'><a href='' onClick={handleDelete}>삭제</a></td>
                     
                    </tr>
                  </tbody>
                </Table>
                
              </div>
            );
          })}

          <footer>
            <hr />
            <Pagination
              total={user.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default UserListPage;
