import axios from 'axios';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from '../components/commonApi/mainApi';



const UserUpdatePage = () => {
    const navigator = useNavigate();
    const [user, setuser] = useState({});
    const [UserUpdate, setUserUpdate] = useState({
        create_date:'',
        modify_date:'',
        user_email:'',
        user_name:'',
        user_nickname:'',
        user_role:'',
      });
      
      const pathName = useLocation().pathname;
      const pathValue = pathName.replace(/[^0-9]/g, '');


      const{create_date, modify_date, user_email, user_id, user_name, 
        user_nickname, user_role} = UserUpdate;
        
    useEffect(()=> {
        getData();
    }, []);


    const getData = async() => {
        await axios
        .get(`${baseUrl}` + '/userlist/update/' + pathValue)
        .then((response) => { 
            console.log(response.data); 
            setUserUpdate(response.data);
            setuser(response.data);
        })
        .catch((err)=> {
              console.error(err.message);
            });
            };
    
    
    const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setUserUpdate((prev) => {
        return {...prev, ...nextState};
    });
    };


    const handleUpdate = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('create_date', create_date);
        formData.append('modify_date', modify_date);
        formData.append('user_email', user_email);
        formData.append('user_id', user_id);
        formData.append('user_name', user_name);
        formData.append('user_nickname', user_nickname);
        formData.append('user_role', user_role);
    
    
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
        await axios
          .put(`${baseUrl}/userlist/update/${user.user_id}`, formData, config)
          .then((response) => {
            console.log(response.data);
            setUserUpdate({
                create_date:'',
                modify_date:'',
                user_email:'',
                user_id:'',
                user_name:'',
                user_nickname:'',
                user_role:'',
            });
    
    
            navigator(`/admin/userlist`);
          })
          .catch((err) => {
            console.error(err.message);
          });
      };
    
    


    const handleReset = (e) => {
        e.preventDefault();
        navigator('/admin/userlist');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigator(-1);
    };

    return(
      
        <div>
<form name='frm' encType='multipart/form-data'>
<center>
    
    <br />
    <br />
    <h3>유저 정보 수정하기</h3>
    <br />
    <br />
<table>
          <tbody>
            <tr className='form-input'>
              <td width='50%' align='center'>ID</td>
              <td>
                {user.user_id}
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>Name</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='user_name'
                  value={user_name}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>Email</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='user_email'
                  size='10'
                  value={user_email}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>Nickname</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='user_nickname'
                  size='20'
                  maxLength='10'
                  value={user_nickname}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>Level</td>
              <td>
                <input
                  className='form-input basic' 
                  type='text'
                  name='user_role'
                  size='20'
                  value={user_role}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>가입일</td>
              <td>
                    {create_date}
              </td>
            </tr>
          </tbody>
        </table>
        
        <br />
        <br />
        <button className='btn btn-primary' onClick={handleUpdate}>
          수정
        </button>
        <button className='btn btn-primary' onClick={handleReset}>
          취소
        </button>
        <button className='btn btn-primary' onClick={handleBack}>
          뒤로
        </button>
        </center>





      </form>
        </div>
    );
};

export default UserUpdatePage;